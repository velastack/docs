export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Test' },
		breadcrumbs: [{ title: 'Test', url: /* @wc-url */ '/test' }],
		learnMore: [
			{
				title: 'Server',
				url: /* @wc-url */ '/test/server',
				description: 'Tests that run against the app and a throwaway database.'
			},
			{
				title: 'Unit',
				url: /* @wc-url */ '/test/unit',
				badge: 'Planned',
				description: 'A separate runner for tests that need no database.'
			}
		]
	};
};
