export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Bless' },
		breadcrumbs: [{ title: 'Bless', url: /* @wc-url */ '/bless' }]
	};
};
