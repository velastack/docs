export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Deploy' },
		breadcrumbs: [
			{ title: 'CMS', url: /* @wc-url */ '/cms' },
			{ title: 'Deploy', url: /* @wc-url */ '/cms/deploy' }
		]
	};
};
