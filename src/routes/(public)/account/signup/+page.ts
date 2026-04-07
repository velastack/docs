export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Sign Up',
		breadcrumbs: [
			{ title: 'Account', url: /* @wc-url */ '/account' },
			{ title: 'Sign Up', url: /* @wc-url */ '/account/signup' }
		]
	};
};
