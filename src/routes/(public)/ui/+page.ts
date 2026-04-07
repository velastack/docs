export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'UI',
		breadcrumbs: [{ title: 'UI', url: /* @wc-url */ '/ui' }]
	};
};
