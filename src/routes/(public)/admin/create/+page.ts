export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Create' },
		breadcrumbs: [
			{ title: 'Admin', url: /* @wc-url */ '/admin' },
			{ title: 'Create', url: /* @wc-url */ '/admin/create' }
		]
	};
};
