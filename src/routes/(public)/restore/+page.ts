export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Restore' },
		breadcrumbs: [{ title: 'Restore', url: /* @wc-url */ '/restore' }]
	};
};
