export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'CLI Reference' },
		breadcrumbs: [{ title: 'CLI Reference', url: /* @wc-url */ '/cli' }],
		learnMore: [
			{
				title: 'Installation',
				url: /* @wc-url */ '/cli/installation',
				description: 'How to install the CLI.'
			},
			{
				title: 'Project Structure',
				url: /* @wc-url */ '/cli/project-structure',
				description: 'What Vela generates, and where it lives.'
			},
			{
				title: 'Environment Variables',
				url: /* @wc-url */ '/cli/environment-variables',
				description: 'Environment variables used by the CLI and backend.'
			}
		]
	};
};
