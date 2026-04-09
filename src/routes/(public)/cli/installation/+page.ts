export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Installation' },
		breadcrumbs: [
			{ title: 'CLI Reference', url: /* @wc-url */ '/cli' },
			{ title: 'Installation', url: /* @wc-url */ '/cli/installation' }
		]
	};
};
