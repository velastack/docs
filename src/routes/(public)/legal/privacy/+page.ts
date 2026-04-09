export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Privacy' },
		breadcrumbs: [
			{ title: 'Legal', url: /* @wc-url */ '/legal' },
			{ title: 'Privacy', url: /* @wc-url */ '/legal/privacy' }
		]
	};
};
