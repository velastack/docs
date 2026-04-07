export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Test',
		breadcrumbs: [{ title: 'Test', url: /* @wc-url */ '/test' }]
	};
};
