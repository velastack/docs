import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Seeds'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Seeds',
				url: '/seeds'
			}
		]
	};
};
