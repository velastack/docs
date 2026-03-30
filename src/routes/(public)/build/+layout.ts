import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Build'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Build',
				url: '/build'
			}
		]
	};
};
