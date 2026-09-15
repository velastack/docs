export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Notifications' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'Notifications', url: /* @wc-url */ '/disable/notifications' }
		]
	};
};
