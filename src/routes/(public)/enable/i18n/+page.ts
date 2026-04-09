export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'i18n' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'i18n', url: /* @wc-url */ '/enable/i18n' }
		]
	};
};
