export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Routes',
		breadcrumbs: [{ title: 'Routes', url: /* @wc-url */ '/routes' }]
	};
};
