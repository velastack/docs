export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Env' },
		breadcrumbs: [{ title: 'Env', url: /* @wc-url */ '/env' }]
	};
};
