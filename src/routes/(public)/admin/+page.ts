export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Admin' },
		breadcrumbs: [{ title: 'Admin', url: /* @wc-url */ '/admin' }]
	};
};
