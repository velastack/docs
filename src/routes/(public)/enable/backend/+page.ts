export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Backend' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Backend', url: /* @wc-url */ '/enable/backend' }
		]
	};
};
