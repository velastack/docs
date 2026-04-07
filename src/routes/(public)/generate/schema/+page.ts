export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Schema',
		breadcrumbs: [
			{ title: 'Generate', url: /* @wc-url */ '/generate' },
			{ title: 'Schema', url: /* @wc-url */ '/generate/schema' }
		]
	};
};
