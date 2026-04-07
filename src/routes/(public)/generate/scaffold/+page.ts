export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Scaffold',
		breadcrumbs: [
			{ title: 'Generate', url: /* @wc-url */ '/generate' },
			{ title: 'Scaffold', url: /* @wc-url */ '/generate/scaffold' }
		]
	};
};
