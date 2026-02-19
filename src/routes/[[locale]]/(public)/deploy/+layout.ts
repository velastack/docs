import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Deploy'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Deploy',
				url: '/deploy'
			}
		]
	};
};
