export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'History Sync' },
		breadcrumbs: [
			{ title: 'Migrate', url: /* @wc-url */ '/migrate' },
			{ title: 'History Sync', url: /* @wc-url */ '/migrate/history-sync' }
		]
	};
};
