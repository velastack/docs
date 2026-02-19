import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Workflow'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Workflow',
				url: '/enable/workflow'
			}
		]
	};
};
