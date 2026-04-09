export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Seeds' },
		breadcrumbs: [{ title: 'Seeds', url: /* @wc-url */ '/seeds' }]
	};
};
