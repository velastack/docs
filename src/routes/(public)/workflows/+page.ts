export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Workflows' },
		breadcrumbs: [{ title: 'Workflows', url: /* @wc-url */ '/workflows' }],
		learnMore: [
			{
				title: 'List',
				url: /* @wc-url */ '/workflows/list',
				description: 'List recent runs and their state.'
			},
			{
				title: 'Run',
				url: /* @wc-url */ '/workflows/run',
				description: 'Start a run from the terminal.'
			},
			{
				title: 'Cancel',
				url: /* @wc-url */ '/workflows/cancel',
				description: 'Cancel a pending or running run.'
			}
		]
	};
};
