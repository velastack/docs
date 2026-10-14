export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Get' },
		breadcrumbs: [
			{ title: 'Env', url: /* @wc-url */ '/env' },
			{ title: 'Get', url: /* @wc-url */ '/env/get' }
		]
	};
};
