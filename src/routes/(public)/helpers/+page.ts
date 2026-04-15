export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Helpers' },
		breadcrumbs: [{ title: 'Helpers', url: /* @wc-url */ '/helpers' }],
		learnMore: [
			{
				title: '@velastack/pocketbase',
				url: /* @wc-url */ '/helpers/pocketbase',
				description: 'This library is used to interact with PocketBase.'
			},
			{
				title: '@velastack/postgres',
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
