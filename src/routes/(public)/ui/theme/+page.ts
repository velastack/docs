export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Theme' },
		breadcrumbs: [
			{ title: 'UI', url: /* @wc-url */ '/ui' },
			{ title: 'Theme', url: /* @wc-url */ '/ui/theme' }
		]
	};
};
