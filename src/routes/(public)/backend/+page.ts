export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Backend' },
		breadcrumbs: [{ title: 'Backend', url: /* @wc-url */ '/backend' }],
		learnMore: [
			{
				pageMetaTags: { title: 'PocketBase' },
				url: /* @wc-url */ '/backend/pocketbase',
				description: 'A lightweight, open-source database backend.'
			},
			{
				pageMetaTags: { title: 'PostgreSQL' },
				url: /* @wc-url */ '/backend/postgres',
				badge: 'Preview',
				description: 'A powerful, full-featured database backend.'
			}
		]
	};
};
