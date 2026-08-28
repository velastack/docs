export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Deployment' },
		breadcrumbs: [
			{ title: 'Destroy', url: /* @wc-url */ '/destroy' },
			{ title: 'Deployment', url: /* @wc-url */ '/destroy/deployment' }
		]
	};
};
