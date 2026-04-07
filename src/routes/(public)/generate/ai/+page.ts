export const load = async ({ parent }) => {
	await parent();

	return {
		title: 'AI',
		breadcrumbs: [
			{ title: 'Generate', url: /* @wc-url */ '/generate' },
			{ title: 'AI', url: /* @wc-url */ '/generate/ai' }
		]
	};
};
