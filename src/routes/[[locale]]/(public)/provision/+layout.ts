import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Provision'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Provision',
				url: '/provision'
			}
		]
	};
};
