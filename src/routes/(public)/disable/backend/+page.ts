export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Backend' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'Backend', url: /* @wc-url */ '/disable/backend' }
		]
	};
};
