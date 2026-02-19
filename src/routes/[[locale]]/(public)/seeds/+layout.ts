import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Seeds'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Seeds',
				url: '/seeds'
			}
		]
	};
};
