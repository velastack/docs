import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

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
