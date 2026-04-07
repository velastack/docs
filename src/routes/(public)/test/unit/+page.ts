export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Unit',
		breadcrumbs: [
			{ title: 'Test', url: /* @wc-url */ '/test' },
			{ title: 'Unit', url: /* @wc-url */ '/test/unit' }
		]
	};
};
