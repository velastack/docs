export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Notifications',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Notifications', url: /* @wc-url */ '/enable/notifications' }
		],
		badges: ['Depends: auth']
	};
};
