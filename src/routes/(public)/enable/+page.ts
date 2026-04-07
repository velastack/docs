export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Enable',
		breadcrumbs: [{ title: 'Enable', url: /* @wc-url */ '/enable' }]
	};
};
