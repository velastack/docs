export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'UI' },
		breadcrumbs: [{ title: 'UI', url: /* @wc-url */ '/ui' }]
	};
};
