import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

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
