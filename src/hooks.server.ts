import * as main from '$locales/main.loader.server.svelte.js';
import * as js from '$locales/js.loader.server.js';
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { locales } from '$locales/data.js';
import { getLocale } from '$locales/main.url';
import { handle as negotiate, stripExtension } from '$lib/negotiate';

// load at server startup
loadLocales(main.key, main.loadCount, main.loadCatalog, locales);
loadLocales(js.key, js.loadCount, js.loadCatalog, locales);

// By this point the extension has done its job — the route is matched and the
// type is picked — so drop it and render as if the canonical URL was requested,
// which keeps `page.url` (locale detection, canonical and hreflang tags) honest.
const canonical: Handle = async ({ event, resolve }) => {
	if (event.locals.negotiate) {
		const url = new URL(event.url);
		url.pathname = stripExtension(url.pathname);
		event.url = url;
	}

	return resolve(event);
};

// A docs page is the same for everyone, so let the CDN hold it and revalidate in
// the background rather than invoking a function per view.
const CACHE_CONTROL = 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400';

// Runs outermost: sveltekit-negotiate builds a fresh Response for the markdown
// case, so anything set further in is thrown away.
const headers: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	if (response.status !== 200) {
		return response;
	}

	const type = response.headers.get('content-type') ?? '';
	const negotiable = type.includes('text/html') || type.includes('text/markdown');

	// sveltekit-negotiate sets this on the markdown response, but the HTML response
	// needs it just as much: without it a shared cache can store the page for
	// /generate and hand it to the next client that asked for markdown.
	if (negotiable && !response.headers.get('vary')?.includes('accept')) {
		response.headers.append('vary', 'accept');
	}

	if (negotiable || event.isDataRequest) {
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
export const handle = sequence(headers, negotiate, canonical, i18n);
