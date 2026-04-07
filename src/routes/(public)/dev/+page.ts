export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Dev',
		breadcrumbs: [{ title: 'Dev', url: /* @wc-url */ '/dev' }]
	};
};
