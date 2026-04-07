export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Helpers',
		breadcrumbs: [{ title: 'Helpers', url: /* @wc-url */ '/helpers' }],
		learnMore: [
			{
				title: '@vela/pocketbase',
				url: /* @wc-url */ '/helpers/pocketbase',
				description: 'This library is used to interact with PocketBase.'
			},
			{
				title: '@vela/postgres',
				url: /* @wc-url */ '/helpers/postgres',
				description: 'This library is used to interact with PostgreSQL.'
			},
			{
				title: 'velastack/action',
				url: /* @wc-url */ '/helpers/github-action',
				description: 'The GitHub Action for deploying Vela projects to a VPS.'
			}
		]
	};
};
