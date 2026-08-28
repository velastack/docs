export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Down' },
		breadcrumbs: [
			{ title: 'Migrate', url: /* @wc-url */ '/migrate' },
			{ title: 'Down', url: /* @wc-url */ '/migrate/down' }
		]
	};
};
