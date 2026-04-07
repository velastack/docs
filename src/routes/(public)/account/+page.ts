export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Account',
		breadcrumbs: [{ title: 'Account', url: /* @wc-url */ '/account' }]
	};
};
