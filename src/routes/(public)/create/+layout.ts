import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Create'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Create',
				url: '/create'
			}
		]
	};
};
