import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Ethos'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Ethos',
				url: '/ethos'
			}
		]
	};
};
