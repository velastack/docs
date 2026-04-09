export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Resource' },
		breadcrumbs: [
			{ title: 'Generate', url: /* @wc-url */ '/generate' },
			{ title: 'Resource', url: /* @wc-url */ '/generate/resource' }
		]
	};
};
