export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Payments' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Payments', url: /* @wc-url */ '/enable/payments' }
		]
	};
};
