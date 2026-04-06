import type { Plugin } from 'vite';

const BLOCK_MARKER = /<!--\s*@(\w+)\s*-->/g;
const INLINE_T = /<!--\s*@t\s+((?:\w+="[^"]*"\s*)+)\s*-->/g;
const SCRIPT_OPEN = /(<script[^>]*>)/;

function transformBlocks(code: string): string {
	const markers = [...code.matchAll(BLOCK_MARKER)];
	if (markers.length === 0) return code;

	let result = '';
	let cursor = 0;
	let i = 0;

	while (i < markers.length) {
		const marker = markers[i];
		const locale = marker[1];
		const markerStart = marker.index!;

		if (locale === 'end') {
			i++;
			continue;
		}

		result += code.slice(cursor, markerStart);

		const localeBlocks: { locale: string; content: string }[] = [];
		let j = i;

		while (j < markers.length && markers[j][1] !== 'end') {
			const blockLocale = markers[j][1];
			const contentStart = markers[j].index! + markers[j][0].length;
			const contentEnd = j + 1 < markers.length ? markers[j + 1].index! : code.length;
			localeBlocks.push({
				locale: blockLocale,
				content: code.slice(contentStart, contentEnd)
			});
			j++;
		}

		const endMarkerEnd =
			j < markers.length ? markers[j].index! + markers[j][0].length : code.length;

		for (let k = 0; k < localeBlocks.length; k++) {
			const block = localeBlocks[k];
			const content = block.content.trim();
			if (k === 0) {
				result += `\n{#if i18nLocale === '${block.locale}'}\n\n${content}\n\n`;
			} else {
				result += `{:else if i18nLocale === '${block.locale}'}\n\n${content}\n\n`;
			}
		}
		result += '{/if}\n';

		cursor = endMarkerEnd;
		i = j + 1;
	}

	result += code.slice(cursor);
	return result;
}

function transformInlineT(code: string): { code: string; declarations: string[] } {
	const declarations: string[] = [];
	let counter = 0;

	const transformed = code.replace(INLINE_T, (_match, pairs: string) => {
		const entries = [...pairs.matchAll(/(\w+)="([^"]*)"/g)].map(
			([, key, value]) => `${key}: '${value.replace(/'/g, "\\'")}'`
		);
		const varName = `i18nT${counter++}`;
		declarations.push(`const ${varName} = {${entries.join(', ')}};`);
		return `{i18nT(${varName})}`;
	});

	return { code: transformed, declarations };
}

function injectPreamble(code: string, extraDeclarations: string[]): string {
	const preamble = `
import { page } from '$app/state';
import { deLocalize } from '$lib/url';
import { locales } from '$locales/data';

let [, i18nLocale] = $derived.by(() => deLocalize(page.url.pathname, locales));
const i18nT = (t) => t[i18nLocale] ?? t['en'];
${extraDeclarations.join('\n')}
`;

	const scriptMatch = code.match(SCRIPT_OPEN);
	if (scriptMatch) {
		const insertPos = scriptMatch.index! + scriptMatch[0].length;
		return code.slice(0, insertPos) + preamble + code.slice(insertPos);
	}

	const frontmatterEnd = code.indexOf('---', code.indexOf('---') + 3);
	if (frontmatterEnd !== -1) {
		const insertPos = frontmatterEnd + 3;
		const scriptBlock = `\n\n<script lang="ts">${preamble}</script>\n`;
		return code.slice(0, insertPos) + scriptBlock + code.slice(insertPos);
	}

	const scriptBlock = `<script lang="ts">${preamble}</script>\n\n`;
	return scriptBlock + code;
}

export function mdsvexI18n(): Plugin {
	return {
		name: 'vite-plugin-mdsvex-i18n',
		enforce: 'pre',
		transform(code, id) {
			if (!id.endsWith('.svx')) return;

			const hasBlocks = BLOCK_MARKER.test(code);
			BLOCK_MARKER.lastIndex = 0;
			const hasInlineT = INLINE_T.test(code);
			INLINE_T.lastIndex = 0;

			if (!hasBlocks && !hasInlineT) return;

			let transformed = code;
			transformed = transformBlocks(transformed);
			const { code: withInlineT, declarations } = transformInlineT(transformed);
			transformed = injectPreamble(withInlineT, declarations);

			return { code: transformed, map: null };
		}
	};
}
