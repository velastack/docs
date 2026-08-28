export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Payments' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'Payments', url: /* @wc-url */ '/disable/payments' }
		],
		badges: ['Pro']
	};
};
