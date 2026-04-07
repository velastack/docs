export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Deploy',
		breadcrumbs: [{ title: 'Deploy', url: /* @wc-url */ '/deploy' }]
	};
};
