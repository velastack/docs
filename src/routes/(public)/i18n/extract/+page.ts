export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Extract',
		breadcrumbs: [
			{ title: 'i18n', url: /* @wc-url */ '/i18n' },
			{ title: 'Extract', url: /* @wc-url */ '/i18n/extract' }
		]
	};
};
