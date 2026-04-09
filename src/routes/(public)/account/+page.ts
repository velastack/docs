export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Account' },
		breadcrumbs: [{ title: 'Account', url: /* @wc-url */ '/account' }]
	};
};
