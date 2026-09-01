export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Delete' },
		breadcrumbs: [
			{ title: 'Backup', url: /* @wc-url */ '/backup' },
			{ title: 'Delete', url: /* @wc-url */ '/backup/delete' }
		]
	};
};
