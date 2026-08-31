import * as main from '$locales/main.loader.server.svelte.js';
import * as js from '$locales/js.loader.server.js';
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { locales } from '$locales/data.js';
import { getLocale } from '$locales/main.url';
import { handle as negotiate } from '$lib/negotiate';

// load at server startup
loadLocales(main.key, main.loadCount, main.loadCatalog, locales);
loadLocales(js.key, js.loadCount, js.loadCatalog, locales);

// A docs page is the same for everyone, so let the CDN hold it and revalidate in
// the background rather than invoking a function per view. Set on the page render;
// sveltekit-negotiate carries it onto the markdown representation, and drops it
// from a 406 so an error is never cached under the page's own policy.
const CACHE_CONTROL = 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400';

const cache: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	const type = response.headers.get('content-type') ?? '';

	if (response.status === 200 && (type.includes('text/html') || event.isDataRequest)) {
		response.headers.set('cache-control', CACHE_CONTROL);
	}

	return response;
};

const i18n: Handle = async ({ event, resolve }) => {
	let locale = getLocale(event.url);

	return await runWithLocale(locale, () =>
		resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
		})
	);
};

// negotiate runs ahead of the render so `locals.negotiate` is set before any load
// runs, and so it sees the rendered HTML on the way back out.
export const handle = sequence(negotiate, cache, i18n);
