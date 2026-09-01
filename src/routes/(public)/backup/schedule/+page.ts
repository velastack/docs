export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Schedule' },
		breadcrumbs: [
			{ title: 'Backup', url: /* @wc-url */ '/backup' },
			{ title: 'Schedule', url: /* @wc-url */ '/backup/schedule' }
		]
	};
};
