export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'List' },
		breadcrumbs: [
			{ title: 'Workflows', url: /* @wc-url */ '/workflows' },
			{ title: 'List', url: /* @wc-url */ '/workflows/list' }
		]
	};
};
