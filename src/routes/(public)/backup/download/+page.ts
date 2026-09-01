export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Download' },
		breadcrumbs: [
			{ title: 'Backup', url: /* @wc-url */ '/backup' },
			{ title: 'Download', url: /* @wc-url */ '/backup/download' }
		]
	};
};
