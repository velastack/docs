import { defineBaseMetaTags } from 'svelte-meta-tags';
import { locales } from '../../locales/data.js';
import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';
// so that the loaders are registered, only here, not required in nested ones (below)
import '../../locales/main.loader.svelte.js';
import '../../locales/js.loader.js';

export const load = async ({ url, params }) => {
	const locale = params.locale ?? 'en';

	if (browser && locales.includes(locale)) {
		await loadLocale(locale);
	}

	const canonical = new URL(url.pathname, url.origin).href;

	const baseTags = defineBaseMetaTags({
		title: 'Getting Started',
		titleTemplate: '%s | Vela Docs',
		description: 'Vela is a fullstack command line tool for rapidly scaffolding modern web apps.',
		canonical,
		openGraph: {
			type: 'website',
			url: canonical,
			images: [
				{
					url: 'https://docs.velastack.dev/og.png',
					alt: 'Vela Docs',
					width: 1200,
					height: 630
				}
			]
		}
	});

	return {
		meta: {
			appName: 'Vela Docs'
		},
		...baseTags
	};
};
