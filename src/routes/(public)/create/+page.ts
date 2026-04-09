export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Create' },
		breadcrumbs: [{ title: 'Create', url: /* @wc-url */ '/create' }]
	};
};
