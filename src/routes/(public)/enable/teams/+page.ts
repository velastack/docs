export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Teams',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Teams', url: /* @wc-url */ '/enable/teams' }
		]
	};
};
