export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Targets' },
		breadcrumbs: [{ title: 'Targets', url: /* @wc-url */ '/targets' }]
	};
};
