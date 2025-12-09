import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'CLI Reference'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'CLI Reference',
				url: '/cli'
			}
		]
	};
};
