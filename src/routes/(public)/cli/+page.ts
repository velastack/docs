export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'CLI Reference',
		breadcrumbs: [{ title: 'CLI Reference', url: /* @wc-url */ '/cli' }]
	};
};
