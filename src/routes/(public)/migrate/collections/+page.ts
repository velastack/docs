export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Collections' },
		breadcrumbs: [
			{ title: 'Migrate', url: /* @wc-url */ '/migrate' },
			{ title: 'Collections', url: /* @wc-url */ '/migrate/collections' }
		]
	};
};
