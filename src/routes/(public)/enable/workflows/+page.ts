export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Workflows' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Workflows', url: /* @wc-url */ '/enable/workflows' }
		],
		badges: ['Depends: backend']
	};
};
