export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Backup' },
		breadcrumbs: [{ title: 'Backup', url: /* @wc-url */ '/backup' }],
		learnMore: [
			{
				title: 'Create',
				url: /* @wc-url */ '/backup/create',
				description: 'Take a backup and download it.'
			},
			{
				title: 'List',
				url: /* @wc-url */ '/backup/list',
				description: 'List the backups on a target.'
			},
			{
				title: 'Download',
				url: /* @wc-url */ '/backup/download',
				description: 'Save an existing backup off the server.'
			},
			{
				title: 'Delete',
				url: /* @wc-url */ '/backup/delete',
				description: 'Remove a backup from a target.'
			},
			{
				title: 'Schedule',
				url: /* @wc-url */ '/backup/schedule',
				description: 'Back up automatically on a schedule.'
			}
		]
	};
};
