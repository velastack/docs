export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Reset' },
		breadcrumbs: [
			{ title: 'Fixtures', url: /* @wc-url */ '/fixtures' },
			{ title: 'Reset', url: /* @wc-url */ '/fixtures/reset' }
		]
	};
};
