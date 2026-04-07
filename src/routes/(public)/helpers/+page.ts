export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Helpers',
		breadcrumbs: [{ title: 'Helpers', url: /* @wc-url */ '/helpers' }]
	};
};
