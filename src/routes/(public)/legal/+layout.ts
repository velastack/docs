import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
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
