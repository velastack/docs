export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Who Am I',
		breadcrumbs: [
			{ title: 'Account', url: /* @wc-url */ '/account' },
			{ title: 'Who Am I', url: /* @wc-url */ '/account/whoami' }
		]
	};
};
