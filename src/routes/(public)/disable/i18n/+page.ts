export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'i18n' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'i18n', url: /* @wc-url */ '/disable/i18n' }
		]
	};
};
