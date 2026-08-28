export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Up' },
		breadcrumbs: [
			{ title: 'Migrate', url: /* @wc-url */ '/migrate' },
			{ title: 'Up', url: /* @wc-url */ '/migrate/up' }
		]
	};
};
