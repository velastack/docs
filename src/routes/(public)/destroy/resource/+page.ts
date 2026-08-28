export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Resource' },
		breadcrumbs: [
			{ title: 'Destroy', url: /* @wc-url */ '/destroy' },
			{ title: 'Resource', url: /* @wc-url */ '/destroy/resource' }
		]
	};
};
