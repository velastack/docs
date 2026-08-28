export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'OAuth' },
		breadcrumbs: [{ title: 'OAuth', url: /* @wc-url */ '/oauth' }],
		badges: ['Planned']
	};
};
