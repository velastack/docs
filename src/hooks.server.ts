import * as main from './locales/main.loader.server.svelte.js';
import * as js from './locales/js.loader.server.js';
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';
import { locales } from './locales/data.js';

// load at server startup
loadLocales(main.key, main.loadIDs, main.loadCatalog, locales);
loadLocales(js.key, js.loadIDs, js.loadCatalog, locales);

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const locale = event.params.locale ?? 'en';
	return await runWithLocale(locale, () => resolve(event));
};
