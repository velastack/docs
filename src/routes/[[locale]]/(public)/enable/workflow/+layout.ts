import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
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
