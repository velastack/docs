export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Subscriptions',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Subscriptions', url: /* @wc-url */ '/enable/subscriptions' }
		]
	};
};
