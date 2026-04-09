export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'API' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'API', url: /* @wc-url */ '/enable/api' }
		]
	};
};
