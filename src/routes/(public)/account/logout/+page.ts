export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Logout',
		breadcrumbs: [
			{ title: 'Account', url: /* @wc-url */ '/account' },
			{ title: 'Logout', url: /* @wc-url */ '/account/logout' }
		]
	};
};
