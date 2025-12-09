import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Sync'
	});

	return {
		...pageTags,
		breadcrumbs: [{ title: 'Sync', url: '/sync' }]
	};
};
