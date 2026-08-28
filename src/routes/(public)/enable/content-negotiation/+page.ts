export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Content Negotiation' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Content Negotiation', url: /* @wc-url */ '/enable/content-negotiation' }
		]
	};
};
