export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'API Keys',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'API Keys', url: /* @wc-url */ '/enable/api-keys' }
		],
		badges: ['Depends: auth', 'Depends: api']
	};
};
