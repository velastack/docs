import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Ethos'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Ethos',
				url: '/ethos'
			}
		]
	};
};
