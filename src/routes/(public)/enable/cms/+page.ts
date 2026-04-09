export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'CMS' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'CMS', url: /* @wc-url */ '/enable/cms' }
		]
	};
};
