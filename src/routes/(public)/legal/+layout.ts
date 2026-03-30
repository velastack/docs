import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Legal'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Legal',
				url: '/legal'
			}
		]
	};
};
