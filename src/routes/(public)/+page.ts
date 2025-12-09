import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async () => {
	const pageTags = definePageMetaTags({
		title: 'Getting Started',
		description:
			'Vela is a fullstack command line tool for rapidly scaffolding modern web apps. Rather than a framework, Vela prioritizes extensibility and developer control by generating editable code, not hidden abstractions.'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Getting Started',
				url: '/'
			}
		]
	};
};
