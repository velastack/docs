export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Form' },
		breadcrumbs: [
			{ title: 'Destroy', url: /* @wc-url */ '/destroy' },
			{ title: 'Form', url: /* @wc-url */ '/destroy/form' }
		]
	};
};
