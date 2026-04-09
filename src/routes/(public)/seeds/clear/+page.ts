export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Clear' },
		breadcrumbs: [
			{ title: 'Seeds', url: /* @wc-url */ '/seeds' },
			{ title: 'Clear', url: /* @wc-url */ '/seeds/clear' }
		]
	};
};
