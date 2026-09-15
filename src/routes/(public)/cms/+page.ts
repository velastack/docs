export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'CMS' },
		breadcrumbs: [{ title: 'CMS', url: /* @wc-url */ '/cms' }],
		learnMore: [
			{
				title: 'Editor',
				url: /* @wc-url */ '/cms/editor',
				description: 'Manage who can sign in to the admin bar.'
			},
			{
				title: 'Deploy',
				url: /* @wc-url */ '/cms/deploy',
				description: 'Rebuild a hosted site with the latest published content.'
			}
		]
	};
};
