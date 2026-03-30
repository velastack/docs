import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

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
