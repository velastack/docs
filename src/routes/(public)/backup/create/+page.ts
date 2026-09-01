export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Create' },
		breadcrumbs: [
			{ title: 'Backup', url: /* @wc-url */ '/backup' },
			{ title: 'Create', url: /* @wc-url */ '/backup/create' }
		]
	};
};
