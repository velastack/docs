import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'i18n'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'i18n',
				url: '/enable/i18n'
			}
		]
	};
};
