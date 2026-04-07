export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Generate',
		breadcrumbs: [{ title: 'Generate', url: /* @wc-url */ '/generate' }]
	};
};
