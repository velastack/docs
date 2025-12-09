import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'I18n'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'I18n',
				url: '/enable/i18n'
			}
		]
	};
};
