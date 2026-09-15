export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Subscriptions' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'Subscriptions', url: /* @wc-url */ '/disable/subscriptions' }
		],
		badges: ['Pro']
	};
};
