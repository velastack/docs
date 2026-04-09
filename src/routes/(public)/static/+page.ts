export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Static Site Generator' },
		breadcrumbs: [{ title: 'Static Site Generator', url: /* @wc-url */ '/static' }]
	};
};
