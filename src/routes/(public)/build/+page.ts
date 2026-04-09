export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Build' },
		breadcrumbs: [{ title: 'Build', url: /* @wc-url */ '/build' }]
	};
};
