export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: '@velastack/kit' },
		breadcrumbs: [
			{ title: 'Helpers', url: /* @wc-url */ '/helpers' },
			{ title: '@velastack/kit', url: /* @wc-url */ '/helpers/kit' }
		]
	};
};
