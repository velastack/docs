export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Auth',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Auth', url: /* @wc-url */ '/enable/auth' }
		]
	};
};
