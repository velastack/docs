export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'PocketBase' },
		breadcrumbs: [
			{ title: 'Backend', url: /* @wc-url */ '/backend' },
			{ title: 'PocketBase', url: /* @wc-url */ '/backend/pocketbase' }
		]
	};
};
