import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Routes'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Routes',
				url: '/routes'
			}
		]
	};
};
