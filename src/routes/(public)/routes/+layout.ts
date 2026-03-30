import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Routes'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Routes',
				url: '/routes'
			}
		]
	};
};
