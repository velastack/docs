export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Disable',
		breadcrumbs: [{ title: 'Disable', url: /* @wc-url */ '/disable' }]
	};
};
