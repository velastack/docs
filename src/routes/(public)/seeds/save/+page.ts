export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Save' },
		breadcrumbs: [
			{ title: 'Seeds', url: /* @wc-url */ '/seeds' },
			{ title: 'Save', url: /* @wc-url */ '/seeds/save' }
		]
	};
};
