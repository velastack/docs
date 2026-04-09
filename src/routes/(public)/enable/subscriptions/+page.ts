export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Subscriptions' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Subscriptions', url: /* @wc-url */ '/enable/subscriptions' }
		]
	};
};
