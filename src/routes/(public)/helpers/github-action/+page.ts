import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	const pageTags = definePageMetaTags({
		title: 'shipvela/action'
	});

	return {
		...pageTags,
		breadcrumbs: [...breadcrumbs, { title: 'shipvela/action', url: '/helpers/github-action' }]
	};
};
