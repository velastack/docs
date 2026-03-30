import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	await parent();

	const pageTags = definePageMetaTags({
		title: 'Account'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Account',
				url: '/account'
			}
		]
	};
};
