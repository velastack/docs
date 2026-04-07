export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Static Site Generator',
		breadcrumbs: [{ title: 'Static Site Generator', url: /* @wc-url */ '/static' }]
	};
};
