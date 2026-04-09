export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Clear' },
		breadcrumbs: [
			{ title: 'Fixtures', url: /* @wc-url */ '/fixtures' },
			{ title: 'Clear', url: /* @wc-url */ '/fixtures/clear' }
		]
	};
};
