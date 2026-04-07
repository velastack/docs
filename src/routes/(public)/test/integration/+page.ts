export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Integration',
		breadcrumbs: [
			{ title: 'Test', url: /* @wc-url */ '/test' },
			{ title: 'Integration', url: /* @wc-url */ '/test/integration' }
		]
	};
};
