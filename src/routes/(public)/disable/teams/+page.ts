export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Teams' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'Teams', url: /* @wc-url */ '/disable/teams' }
		],
		badges: ['Pro']
	};
};
