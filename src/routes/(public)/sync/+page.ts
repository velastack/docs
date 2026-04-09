export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Sync' },
		breadcrumbs: [{ title: 'Sync', url: /* @wc-url */ '/sync' }]
	};
};
