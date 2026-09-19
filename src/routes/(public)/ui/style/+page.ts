export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Style' },
		breadcrumbs: [
			{ title: 'UI', url: /* @wc-url */ '/ui' },
			{ title: 'Style', url: /* @wc-url */ '/ui/style' }
		]
	};
};
