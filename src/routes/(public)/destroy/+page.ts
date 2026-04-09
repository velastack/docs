export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Destroy' },
		breadcrumbs: [{ title: 'Destroy', url: /* @wc-url */ '/destroy' }]
	};
};
