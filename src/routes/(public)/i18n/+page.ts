export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'i18n' },
		breadcrumbs: [{ title: 'i18n', url: /* @wc-url */ '/i18n' }],
		badges: ['Depends: i18n']
	};
};
