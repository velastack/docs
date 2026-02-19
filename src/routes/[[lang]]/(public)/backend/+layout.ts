import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
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
