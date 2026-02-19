import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Dev'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Dev',
				url: '/dev'
			}
		]
	};
};
