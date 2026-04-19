export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Regen' },
		breadcrumbs: [
			{ title: 'Fixtures', url: /* @wc-url */ '/fixtures' },
			{ title: 'Regen', url: /* @wc-url */ '/fixtures/regen' }
		]
	};
};
