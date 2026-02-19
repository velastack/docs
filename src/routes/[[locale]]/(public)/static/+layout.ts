import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Static Site Generator'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Static Site Generator',
				url: '/static'
			}
		]
	};
};
