export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'AI' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'AI', url: /* @wc-url */ '/enable/ai' }
		]
	};
};
