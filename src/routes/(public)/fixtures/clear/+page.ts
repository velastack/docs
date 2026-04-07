export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Clear',
		breadcrumbs: [
			{ title: 'Fixtures', url: /* @wc-url */ '/fixtures' },
			{ title: 'Clear', url: /* @wc-url */ '/fixtures/clear' }
		]
	};
};
