export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Getting Started' },
		breadcrumbs: [{ title: 'Getting Started', url: /* @wc-url */ '/' }]
	};
};
