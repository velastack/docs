export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Analytics' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Analytics', url: /* @wc-url */ '/enable/analytics' }
		]
	};
};
