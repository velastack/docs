export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Seeds',
		breadcrumbs: [{ title: 'Seeds', url: /* @wc-url */ '/seeds' }]
	};
};
