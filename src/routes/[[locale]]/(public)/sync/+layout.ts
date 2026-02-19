import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Sync'
	});

	return {
		...pageTags,
		breadcrumbs: [{ title: 'Sync', url: '/sync' }]
	};
};
