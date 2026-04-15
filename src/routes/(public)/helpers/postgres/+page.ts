export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: '@velastack/postgres' },
		breadcrumbs: [
			{ title: 'Helpers', url: /* @wc-url */ '/helpers' },
			{ title: '@velastack/postgres', url: /* @wc-url */ '/helpers/postgres' }
		]
	};
};
