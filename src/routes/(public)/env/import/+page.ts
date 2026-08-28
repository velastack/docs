export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Import' },
		breadcrumbs: [
			{ title: 'Env', url: /* @wc-url */ '/env' },
			{ title: 'Import', url: /* @wc-url */ '/env/import' }
		]
	};
};
