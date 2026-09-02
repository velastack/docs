import type { Plugin } from 'vite';
import { hasMarkers, parseLocaleBlocks, replaceInlineT } from './i18n-blocks.js';

const SCRIPT_OPEN = /(<script[^>]*>)/;
const FENCE = /^\s*(```|~~~)/;

/**
 * Offset just past the opening tag of the page's own `<script>`, or -1.
 *
 * A `<script>` inside a fenced code block is prose — an example the page is
 * showing, not a script the page has. Matching the first tag anywhere used to
 * inject the preamble into the fence, so it rendered as text inside a `<pre>`
 * and `i18nLocale` was never declared for the page.
 */
export function findScriptOpenEnd(code: string): number {
	let inFence = false;
	let offset = 0;

	for (const line of code.split('\n')) {
		if (FENCE.test(line)) {
			inFence = !inFence;
		} else if (!inFence) {
			const match = line.match(SCRIPT_OPEN);
			if (match) return offset + match.index! + match[0].length;
		}
		offset += line.length + 1;
	}

	return -1;
}

function transformBlocks(code: string): string {
	let result = '';

	for (const segment of parseLocaleBlocks(code)) {
		if (segment.type === 'shared') {
			result += segment.content;
			continue;
		}

		segment.blocks.forEach((block, k) => {
			const content = block.content.trim();
			if (k === 0) {
				result += `\n{#if i18nLocale === '${block.locale}'}\n\n${content}\n\n`;
			} else {
				result += `{:else if i18nLocale === '${block.locale}'}\n\n${content}\n\n`;
			}
		});
		result += '{/if}\n';
	}

	return result;
}

function transformInlineT(code: string): { code: string; declarations: string[] } {
	const declarations: string[] = [];
	let counter = 0;

	const transformed = replaceInlineT(code, (pairs) => {
		const entries = Object.entries(pairs).map(
			([key, value]) => `${key}: '${value.replace(/'/g, "\\'")}'`
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

	const scriptOpenEnd = findScriptOpenEnd(code);
	if (scriptOpenEnd !== -1) {
		return code.slice(0, scriptOpenEnd) + preamble + code.slice(scriptOpenEnd);
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
			if (!hasMarkers(code)) return;

			let transformed = code;
			transformed = transformBlocks(transformed);
			const { code: withInlineT, declarations } = transformInlineT(transformed);
			transformed = injectPreamble(withInlineT, declarations);

			return { code: transformed, map: null };
		}
	};
}
