export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Previews' },
		breadcrumbs: [
			{ title: 'Deploy', url: /* @wc-url */ '/deploy' },
			{ title: 'Previews', url: /* @wc-url */ '/deploy/previews' }
		]
	};
};
