export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Scaffold' },
		breadcrumbs: [
			{ title: 'Generate', url: /* @wc-url */ '/generate' },
			{ title: 'Scaffold', url: /* @wc-url */ '/generate/scaffold' }
		]
	};
};
