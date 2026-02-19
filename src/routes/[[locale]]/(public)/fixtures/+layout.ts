import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

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
