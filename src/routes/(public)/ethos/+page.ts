export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Ethos' },
		breadcrumbs: [{ title: 'Ethos', url: /* @wc-url */ '/ethos' }]
	};
};
