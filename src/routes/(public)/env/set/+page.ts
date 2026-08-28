export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Set' },
		breadcrumbs: [
			{ title: 'Env', url: /* @wc-url */ '/env' },
			{ title: 'Set', url: /* @wc-url */ '/env/set' }
		]
	};
};
