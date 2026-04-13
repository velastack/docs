export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Backend' },
		breadcrumbs: [{ title: 'Backend', url: /* @wc-url */ '/backend' }],
		learnMore: [
			{
				title: 'PocketBase',
				url: /* @wc-url */ '/backend/pocketbase',
				description: 'A lightweight, open-source database backend.'
			},
			{
				title: 'PostgreSQL',
				url: /* @wc-url */ '/backend/postgres',
				badge: 'Preview',
				description: 'A powerful, full-featured database backend.'
			}
		]
	};
};
