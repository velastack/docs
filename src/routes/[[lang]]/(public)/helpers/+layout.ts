import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Helpers'
	});

	return {
		...pageTags,
		breadcrumbs: [{ title: 'Helpers', url: '/helpers' }]
	};
};
