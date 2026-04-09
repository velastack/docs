export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Fixtures' },
		breadcrumbs: [{ title: 'Fixtures', url: /* @wc-url */ '/fixtures' }]
	};
};
