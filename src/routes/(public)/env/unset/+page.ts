export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Unset' },
		breadcrumbs: [
			{ title: 'Env', url: /* @wc-url */ '/env' },
			{ title: 'Unset', url: /* @wc-url */ '/env/unset' }
		]
	};
};
