export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Clean' },
		breadcrumbs: [
			{ title: 'i18n', url: /* @wc-url */ '/i18n' },
			{ title: 'Clean', url: /* @wc-url */ '/i18n/clean' }
		]
	};
};
