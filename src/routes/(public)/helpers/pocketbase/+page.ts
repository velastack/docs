export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: '@vela/pocketbase' },
		breadcrumbs: [
			{ title: 'Helpers', url: /* @wc-url */ '/helpers' },
			{ title: '@vela/pocketbase', url: /* @wc-url */ '/helpers/pocketbase' }
		]
	};
};
