import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Test'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Test',
				url: '/test'
			}
		]
	};
};
