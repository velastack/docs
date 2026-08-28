export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Rollback' },
		breadcrumbs: [{ title: 'Rollback', url: /* @wc-url */ '/rollback' }]
	};
};
