import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Fixtures'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Fixtures',
				url: '/fixtures'
			}
		]
	};
};
