export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Content Negotiation' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'Content Negotiation', url: /* @wc-url */ '/disable/content-negotiation' }
		]
	};
};
