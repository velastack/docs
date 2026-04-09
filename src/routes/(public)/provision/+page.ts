export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Provision' },
		breadcrumbs: [{ title: 'Provision', url: /* @wc-url */ '/provision' }]
	};
};
