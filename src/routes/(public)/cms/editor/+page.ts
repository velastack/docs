export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Editor' },
		breadcrumbs: [
			{ title: 'CMS', url: /* @wc-url */ '/cms' },
			{ title: 'Editor', url: /* @wc-url */ '/cms/editor' }
		]
	};
};
