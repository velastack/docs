export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Build',
		breadcrumbs: [{ title: 'Build', url: /* @wc-url */ '/build' }]
	};
};
