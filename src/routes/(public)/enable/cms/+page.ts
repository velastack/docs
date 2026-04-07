export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'CMS',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'CMS', url: /* @wc-url */ '/enable/cms' }
		]
	};
};
