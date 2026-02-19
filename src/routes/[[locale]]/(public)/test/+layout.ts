import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Test'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Test',
				url: '/test'
			}
		]
	};
};
