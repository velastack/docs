export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'velastack/action' },
		breadcrumbs: [
			{ title: 'Helpers', url: /* @wc-url */ '/helpers' },
			{ title: 'velastack/action', url: /* @wc-url */ '/helpers/github-action' }
		]
	};
};
