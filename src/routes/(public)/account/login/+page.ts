export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Login',
		breadcrumbs: [
			{ title: 'Account', url: /* @wc-url */ '/account' },
			{ title: 'Login', url: /* @wc-url */ '/account/login' }
		]
	};
};
