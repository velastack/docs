export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'i18n',
		breadcrumbs: [{ title: 'i18n', url: /* @wc-url */ '/i18n' }]
	};
};
