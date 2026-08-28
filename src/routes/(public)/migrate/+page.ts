export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Migrate' },
		breadcrumbs: [{ title: 'Migrate', url: /* @wc-url */ '/migrate' }]
	};
};
