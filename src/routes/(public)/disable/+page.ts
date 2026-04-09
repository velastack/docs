export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Disable' },
		breadcrumbs: [{ title: 'Disable', url: /* @wc-url */ '/disable' }]
	};
};
