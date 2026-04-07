export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Destroy',
		breadcrumbs: [{ title: 'Destroy', url: /* @wc-url */ '/destroy' }]
	};
};
