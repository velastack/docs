export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: '@velastack/pocketbase' },
		breadcrumbs: [
			{ title: 'Helpers', url: /* @wc-url */ '/helpers' },
			{ title: '@velastack/pocketbase', url: /* @wc-url */ '/helpers/pocketbase' }
		]
	};
};
