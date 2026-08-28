export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Preview' },
		breadcrumbs: [{ title: 'Preview', url: /* @wc-url */ '/preview' }]
	};
};
