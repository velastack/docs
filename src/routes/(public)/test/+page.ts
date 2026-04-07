export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Test',
		breadcrumbs: [{ title: 'Test', url: /* @wc-url */ '/test' }],
		learnMore: [
			{
				title: 'Unit',
				url: /* @wc-url */ '/test/unit',
				description: 'Unit tests for your application.'
			},
			{
				title: 'Integration',
				url: /* @wc-url */ '/test/integration',
				description: 'Integration tests for your application.'
			}
		]
	};
};
