import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	const pageTags = definePageMetaTags({
		title: 'Status'
	});

	return {
		...pageTags,
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'Status',
				url: '/i18n/status'
			}
		]
	};
};
