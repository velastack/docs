export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'API' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'API', url: /* @wc-url */ '/disable/api' }
		]
	};
};
