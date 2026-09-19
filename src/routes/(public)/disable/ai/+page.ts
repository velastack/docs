export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'AI' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'AI', url: /* @wc-url */ '/disable/ai' }
		]
	};
};
