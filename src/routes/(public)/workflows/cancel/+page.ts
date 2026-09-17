export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Cancel' },
		breadcrumbs: [
			{ title: 'Workflows', url: /* @wc-url */ '/workflows' },
			{ title: 'Cancel', url: /* @wc-url */ '/workflows/cancel' }
		]
	};
};
