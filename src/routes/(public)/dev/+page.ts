export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Dev' },
		breadcrumbs: [{ title: 'Dev', url: /* @wc-url */ '/dev' }]
	};
};
