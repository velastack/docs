export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Backend',
		breadcrumbs: [{ title: 'Backend', url: /* @wc-url */ '/backend' }]
	};
};
