import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Enable'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Enable',
				url: '/enable'
			}
		]
	};
};
