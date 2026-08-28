export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Status' },
		breadcrumbs: [{ title: 'Status', url: /* @wc-url */ '/status' }]
	};
};
