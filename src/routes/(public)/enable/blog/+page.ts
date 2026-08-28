export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Blog' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Blog', url: /* @wc-url */ '/enable/blog' }
		],
		badges: ['Depends: backend']
	};
};
