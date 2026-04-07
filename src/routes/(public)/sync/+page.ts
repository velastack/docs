export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Sync',
		breadcrumbs: [{ title: 'Sync', url: /* @wc-url */ '/sync' }]
	};
};
