export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Schema' },
		breadcrumbs: [
			{ title: 'Destroy', url: /* @wc-url */ '/destroy' },
			{ title: 'Schema', url: /* @wc-url */ '/destroy/schema' }
		]
	};
};
