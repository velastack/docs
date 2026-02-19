import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

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
