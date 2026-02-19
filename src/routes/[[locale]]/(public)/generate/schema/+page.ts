import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	const pageTags = definePageMetaTags({
		title: 'Schema'
	});

	return {
		...pageTags,
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'Schema',
				url: '/generate/schema'
			}
		]
	};
};
