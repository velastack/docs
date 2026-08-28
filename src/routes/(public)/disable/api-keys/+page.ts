export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'API Keys' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'API Keys', url: /* @wc-url */ '/disable/api-keys' }
		]
	};
};
