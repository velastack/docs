export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'List' },
		breadcrumbs: [
			{ title: 'Backup', url: /* @wc-url */ '/backup' },
			{ title: 'List', url: /* @wc-url */ '/backup/list' }
		]
	};
};
