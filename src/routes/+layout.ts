import { defineBaseMetaTags } from 'svelte-meta-tags';
import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';
import { getLocale } from '../locales/main.url';

import '../locales/main.loader.svelte.js';
import '../locales/js.loader.js';

export const load = async ({ url }) => {
	const locale = getLocale(url);

	if (browser) {
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
