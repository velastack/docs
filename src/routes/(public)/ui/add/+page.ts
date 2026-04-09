export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Add' },
		breadcrumbs: [
			{ title: 'UI', url: /* @wc-url */ '/ui' },
			{ title: 'Add', url: /* @wc-url */ '/ui/add' }
		]
	};
};
