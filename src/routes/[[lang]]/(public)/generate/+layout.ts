import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Generate'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Generate',
				url: '/generate'
			}
		]
	};
};
