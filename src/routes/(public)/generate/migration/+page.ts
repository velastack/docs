export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Migration' },
		breadcrumbs: [
			{ title: 'Generate', url: /* @wc-url */ '/generate' },
			{ title: 'Migration', url: /* @wc-url */ '/generate/migration' }
		]
	};
};
