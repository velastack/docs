export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Generate' },
		breadcrumbs: [{ title: 'Generate', url: /* @wc-url */ '/generate' }]
	};
};
