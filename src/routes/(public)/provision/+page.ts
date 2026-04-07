export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Provision',
		breadcrumbs: [{ title: 'Provision', url: /* @wc-url */ '/provision' }]
	};
};
