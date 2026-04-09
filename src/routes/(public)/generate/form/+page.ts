export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Form' },
		breadcrumbs: [
			{ title: 'Generate', url: /* @wc-url */ '/generate' },
			{ title: 'Form', url: /* @wc-url */ '/generate/component' }
		]
	};
};
