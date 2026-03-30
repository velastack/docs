import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Helpers'
	});

	return {
		...pageTags,
		breadcrumbs: [{ title: 'Helpers', url: '/helpers' }]
	};
};
