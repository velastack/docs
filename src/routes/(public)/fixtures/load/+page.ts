export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Load' },
		breadcrumbs: [
			{ title: 'Fixtures', url: /* @wc-url */ '/fixtures' },
			{ title: 'Load', url: /* @wc-url */ '/fixtures/load' }
		]
	};
};
