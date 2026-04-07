export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Status',
		breadcrumbs: [
			{ title: 'i18n', url: /* @wc-url */ '/i18n' },
			{ title: 'Status', url: /* @wc-url */ '/i18n/status' }
		]
	};
};
