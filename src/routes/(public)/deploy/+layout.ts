import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

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
