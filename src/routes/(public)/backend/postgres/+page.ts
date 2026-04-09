export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'PostgreSQL' },
		breadcrumbs: [
			{ title: 'Backend', url: /* @wc-url */ '/backend' },
			{ title: 'PostgreSQL', url: /* @wc-url */ '/backend/postgres' }
		]
	};
};
