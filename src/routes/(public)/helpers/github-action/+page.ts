import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	const pageTags = definePageMetaTags({
		title: 'velastack/action'
	});

	return {
		...pageTags,
		breadcrumbs: [...breadcrumbs, { title: 'velastack/action', url: '/helpers/github-action' }]
	};
};
