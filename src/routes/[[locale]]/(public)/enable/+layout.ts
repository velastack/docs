import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

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
