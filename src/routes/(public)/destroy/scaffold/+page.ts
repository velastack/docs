export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Scaffold' },
		breadcrumbs: [
			{ title: 'Destroy', url: /* @wc-url */ '/destroy' },
			{ title: 'Scaffold', url: /* @wc-url */ '/destroy/scaffold' }
		]
	};
};
