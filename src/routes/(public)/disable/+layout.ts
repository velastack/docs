import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Disable'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Disable',
				url: '/disable'
			}
		]
	};
};
