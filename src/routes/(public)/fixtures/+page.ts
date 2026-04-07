export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Fixtures',
		breadcrumbs: [{ title: 'Fixtures', url: /* @wc-url */ '/fixtures' }]
	};
};
