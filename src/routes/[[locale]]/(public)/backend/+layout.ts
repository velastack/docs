import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Backend'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Backend',
				url: '/backend'
			}
		]
	};
};
