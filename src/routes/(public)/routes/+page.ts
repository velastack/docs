export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Routes' },
		breadcrumbs: [{ title: 'Routes', url: /* @wc-url */ '/routes' }]
	};
};
