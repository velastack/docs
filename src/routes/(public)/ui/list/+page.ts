export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'List' },
		breadcrumbs: [
			{ title: 'UI', url: /* @wc-url */ '/ui' },
			{ title: 'List', url: /* @wc-url */ '/ui/list' }
		]
	};
};
