/**
 * The `<!-- @en -->` / `<!-- @es -->` / `<!-- @end -->` grammar used inside `.svx`
 * docs, plus the inline `<!-- @t en="…" es="…" -->` form.
 *
 * Two consumers read it and they must agree: `mdsvex-i18n.ts` compiles the blocks
 * into Svelte `{#if}` branches for the rendered page, and `markdown.server.ts`
 * picks a single branch when the page is served as markdown.
 */

export type Segment =
	| { type: 'shared'; content: string }
	| { type: 'localized'; blocks: { locale: string; content: string }[] };

const blockMarker = () => /<!--\s*@(\w+)\s*-->/g;
const inlineT = () => /<!--\s*@t\s+((?:\w+="[^"]*"\s*)+)\s*-->/g;

export function hasMarkers(code: string): boolean {
	return blockMarker().test(code) || inlineT().test(code);
}

/** Splits source into shared prose and locale-branched groups, in document order. */
export function parseLocaleBlocks(code: string): Segment[] {
	const markers = [...code.matchAll(blockMarker())];
	if (markers.length === 0) return [{ type: 'shared', content: code }];

	const segments: Segment[] = [];
	let cursor = 0;
	let i = 0;

	while (i < markers.length) {
		// A stray `@end` with no group in front of it.
		if (markers[i][1] === 'end') {
			i++;
			continue;
		}

		segments.push({ type: 'shared', content: code.slice(cursor, markers[i].index!) });

		const blocks: { locale: string; content: string }[] = [];
		let j = i;

		while (j < markers.length && markers[j][1] !== 'end') {
			const contentStart = markers[j].index! + markers[j][0].length;
			const contentEnd = j + 1 < markers.length ? markers[j + 1].index! : code.length;
			blocks.push({ locale: markers[j][1], content: code.slice(contentStart, contentEnd) });
			j++;
		}

		segments.push({ type: 'localized', blocks });

		cursor = j < markers.length ? markers[j].index! + markers[j][0].length : code.length;
		i = j + 1;
	}

	segments.push({ type: 'shared', content: code.slice(cursor) });
	return segments;
}

/** Rewrites every inline `@t` marker via `replace`, which receives the parsed pairs. */
export function replaceInlineT(
	code: string,
	replace: (pairs: Record<string, string>) => string
): string {
	return code.replace(inlineT(), (_match, attrs: string) => {
		const pairs = Object.fromEntries(
			[...attrs.matchAll(/(\w+)="([^"]*)"/g)].map(([, key, value]) => [key, value])
		);
		return replace(pairs);
	});
}
