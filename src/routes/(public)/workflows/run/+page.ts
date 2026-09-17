export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Run' },
		breadcrumbs: [
			{ title: 'Workflows', url: /* @wc-url */ '/workflows' },
			{ title: 'Run', url: /* @wc-url */ '/workflows/run' }
		]
	};
};
