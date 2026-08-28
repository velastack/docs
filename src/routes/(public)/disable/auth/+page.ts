export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Auth' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'Auth', url: /* @wc-url */ '/disable/auth' }
		]
	};
};
