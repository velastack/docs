export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'CLI Reference',
		breadcrumbs: [{ title: 'CLI Reference', url: /* @wc-url */ '/cli' }],
		learnMore: [
			{
				title: 'Installation',
				url: /* @wc-url */ '/cli/installation',
				description: 'How to install the CLI.'
			},
			{
				title: 'Environment Variables',
				url: /* @wc-url */ '/cli/environment-variables',
				description: 'Environment variables used by the CLI and backend.'
			}
		]
	};
};
