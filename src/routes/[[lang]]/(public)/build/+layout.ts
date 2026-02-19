import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Build'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Build',
				url: '/build'
			}
		]
	};
};
