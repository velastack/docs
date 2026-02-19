import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Destroy'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Destroy',
				url: '/destroy'
			}
		]
	};
};
