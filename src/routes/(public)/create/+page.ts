export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Create',
		breadcrumbs: [{ title: 'Create', url: /* @wc-url */ '/create' }]
	};
};
