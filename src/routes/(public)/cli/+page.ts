export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'CLI Reference' },
		breadcrumbs: [{ title: 'CLI Reference', url: /* @wc-url */ '/cli' }],
		learnMore: [
			{
				pageMetaTags: { title: 'Installation' },
				url: /* @wc-url */ '/cli/installation',
				description: 'How to install the CLI.'
			},
			{
				pageMetaTags: { title: 'Environment Variables' },
				url: /* @wc-url */ '/cli/environment-variables',
				description: 'Environment variables used by the CLI and backend.'
			}
		]
	};
};
