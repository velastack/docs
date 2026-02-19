import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'UI'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'UI',
				url: '/ui'
			}
		]
	};
};
