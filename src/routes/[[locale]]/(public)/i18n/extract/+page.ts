import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	const pageTags = definePageMetaTags({
		title: 'Extract'
	});

	return {
		...pageTags,
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'Extract',
				url: '/i18n/extract'
			}
		]
	};
};
