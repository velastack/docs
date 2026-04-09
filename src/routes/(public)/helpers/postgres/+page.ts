export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: '@vela/postgres' },
		breadcrumbs: [
			{ title: 'Helpers', url: /* @wc-url */ '/helpers' },
			{ title: '@vela/postgres', url: /* @wc-url */ '/helpers/postgres' }
		]
	};
};
