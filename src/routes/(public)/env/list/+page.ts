export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'List' },
		breadcrumbs: [
			{ title: 'Env', url: /* @wc-url */ '/env' },
			{ title: 'List', url: /* @wc-url */ '/env/list' }
		]
	};
};
