export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Create' },
		breadcrumbs: [
			{ title: 'Migrate', url: /* @wc-url */ '/migrate' },
			{ title: 'Create', url: /* @wc-url */ '/migrate/create' }
		]
	};
};
