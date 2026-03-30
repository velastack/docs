import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Create'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Create',
				url: '/create'
			}
		]
	};
};
