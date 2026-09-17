export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Workflow' },
		breadcrumbs: [
			{ title: 'Generate', url: /* @wc-url */ '/generate' },
			{ title: 'Workflow', url: /* @wc-url */ '/generate/workflow' }
		]
	};
};
