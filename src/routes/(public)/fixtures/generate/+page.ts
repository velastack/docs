export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Generate' },
		breadcrumbs: [
			{ title: 'Fixtures', url: /* @wc-url */ '/fixtures' },
			{ title: 'Generate', url: /* @wc-url */ '/fixtures/generate' }
		]
	};
};
