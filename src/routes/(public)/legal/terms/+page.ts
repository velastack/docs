export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Terms' },
		breadcrumbs: [
			{ title: 'Legal', url: /* @wc-url */ '/legal' },
			{ title: 'Terms', url: /* @wc-url */ '/legal/terms' }
		]
	};
};
