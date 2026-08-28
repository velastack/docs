export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Server' },
		breadcrumbs: [
			{ title: 'Test', url: /* @wc-url */ '/test' },
			{ title: 'Server', url: /* @wc-url */ '/test/server' }
		]
	};
};
