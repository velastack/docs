export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Deploy' },
		breadcrumbs: [{ title: 'Deploy', url: /* @wc-url */ '/deploy' }]
	};
};
