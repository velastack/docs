export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Legal',
		breadcrumbs: [{ title: 'Legal', url: /* @wc-url */ '/legal' }]
	};
};
