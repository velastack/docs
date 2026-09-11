export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Domains' },
		breadcrumbs: [
			{ title: 'Deploy', url: /* @wc-url */ '/deploy' },
			{ title: 'Domains', url: /* @wc-url */ '/deploy/domains' }
		]
	};
};
