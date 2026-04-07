export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Watch',
		breadcrumbs: [
			{ title: 'i18n', url: /* @wc-url */ '/i18n' },
			{ title: 'Watch', url: /* @wc-url */ '/i18n/watch' }
		]
	};
};
