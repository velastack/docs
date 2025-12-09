import { defineBaseMetaTags } from 'svelte-meta-tags';

export const load = async ({ url }) => {
	const canonical = new URL(url.pathname, url.origin).href;

	const baseTags = defineBaseMetaTags({
		title: 'Getting Started',
		titleTemplate: '%s | Vela Docs',
		description:
			'Vela is a fullstack command line tool for rapidly scaffolding modern web apps. Rather than a framework, Vela prioritizes extensibility and developer control by generating editable code, not hidden abstractions.',
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
