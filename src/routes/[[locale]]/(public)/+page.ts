import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async () => {
	const pageTags = definePageMetaTags({
		title: 'Getting Started'
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
