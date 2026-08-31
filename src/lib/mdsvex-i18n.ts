import type { Plugin } from 'vite';
import { hasMarkers, parseLocaleBlocks, replaceInlineT } from './i18n-blocks.js';

const SCRIPT_OPEN = /(<script[^>]*>)/;

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
			if (!hasMarkers(code)) return;

			let transformed = code;
			transformed = transformBlocks(transformed);
			const { code: withInlineT, declarations } = transformInlineT(transformed);
			transformed = injectPreamble(withInlineT, declarations);

			return { code: transformed, map: null };
		}
	};
}
