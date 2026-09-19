export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Analytics' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'Analytics', url: /* @wc-url */ '/disable/analytics' }
		]
	};
};
