export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Link' },
		breadcrumbs: [{ title: 'Link', url: /* @wc-url */ '/link' }]
	};
};
