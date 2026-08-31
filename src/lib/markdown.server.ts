import { parseLocaleBlocks, replaceInlineT } from './i18n-blocks';
import { defaultLocale } from './url';
import type { Locale } from '$locales/data';

/**
 * Raw `.svx` sources, keyed by file path. Eager so a route id resolves to source
 * with a plain lookup; `?raw` keeps mdsvex and the i18n plugin out of the way.
 * Server-only, so none of this reaches the client bundle.
 */
const sources = import.meta.glob('/src/routes/**/+page.svx', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

type PageModule = {
	load?: (event: {
		parent: () => Promise<Record<string, unknown>>;
	}) => Promise<{ pageMetaTags?: { title?: string } }>;
};

/** The matching `+page.ts` modules, which is where each doc's title lives. */
const pages = import.meta.glob('/src/routes/**/+page.ts', { eager: true }) as Record<
	string,
	PageModule
>;

/** The component imports mdsvex needs, always the first thing in the file. */
const LEADING_SCRIPT = /^\s*<script[^>]*>[\s\S]*?<\/script>\s*/;

/**
 * `Depends: auth` / `Pro` callouts, written either bare or wrapped in a flex
 * `<div>`. The wrapper only matches when it holds nothing but badges.
 */
const BADGE_WRAPPER = /<div[^>]*>\s*((?:<Badge[^>]*>[\s\S]*?<\/Badge>\s*)+)<\/div>/g;
const BADGE_RUN = /(?:<Badge[^>]*>[\s\S]*?<\/Badge>\s*)+/g;
const BADGE = /<Badge([^>]*)>([\s\S]*?)<\/Badge>/g;
const HREF = /href="([^"]*)"/;

const BLANK_LINES = /\n{3,}/g;

/** Raw source for a route, or null if the route isn't a `.svx` doc. */
export function markdownSource(routeId: string): string | null {
	return sources[`/src/routes${routeId}/+page.svx`] ?? null;
}

/**
 * A doc's title lives in its `+page.ts`, which a layout load can't reach, so read
 * it from the module and run the load here. Every one of these takes nothing but
 * `parent`, and running it inside the request picks up the locale the same way a
 * normal render would.
 */
export async function pageTitle(routeId: string): Promise<string | null> {
	const load = pages[`/src/routes${routeId}/+page.ts`]?.load;
	if (!load) {
		return null;
	}

	try {
		const data = await load({ parent: async () => ({}) });
		return data?.pageMetaTags?.title ?? null;
	} catch {
		// A load that wants more of the event than `parent` just gets no heading.
		return null;
	}
}

function badgesToMarkdown(run: string): string {
	const badges = [...run.matchAll(BADGE)].map(([, attrs, text]) => {
		const label = text.trim();
		const href = attrs.match(HREF)?.[1];
		return href ? `[${label}](${href})` : label;
	});

	return `> ${badges.join(' · ')}\n\n`;
}

/**
 * Turns a `.svx` doc into plain markdown for one locale: drops the script block,
 * keeps only the requested locale's blocks, and renders the badge callouts as
 * blockquotes. Everything else is already markdown and passes through untouched.
 *
 * The docs carry no heading of their own — the page renders its title from route
 * data — so a standalone file needs one put back on top.
 */
export function toMarkdown(source: string, locale: Locale, title?: string | null): string {
	const localized = parseLocaleBlocks(source.replace(LEADING_SCRIPT, ''))
		.map((segment) => {
			if (segment.type === 'shared') return segment.content;

			const blocks = new Map(segment.blocks.map((block) => [block.locale, block.content]));
			const content = blocks.get(locale) ?? blocks.get(defaultLocale) ?? '';
			return `\n\n${content.trim()}\n\n`;
		})
		.join('');

	const body = replaceInlineT(localized, (pairs) => pairs[locale] ?? pairs[defaultLocale] ?? '')
		.replace(BADGE_WRAPPER, (_match, badges: string) => badges)
		.replace(BADGE_RUN, badgesToMarkdown)
		.replace(BLANK_LINES, '\n\n')
		.trim();

	return title ? `# ${title}\n\n${body}` : body;
}
