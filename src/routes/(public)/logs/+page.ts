export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Logs' },
		breadcrumbs: [{ title: 'Logs', url: /* @wc-url */ '/logs' }]
	};
};
