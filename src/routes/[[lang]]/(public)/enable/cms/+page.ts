import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	const pageTags = definePageMetaTags({
		title: 'CMS'
	});

	return {
		...pageTags,
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'CMS',
				url: '/enable/cms'
			}
		]
	};
};
