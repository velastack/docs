export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Helpers' },
		breadcrumbs: [{ title: 'Helpers', url: /* @wc-url */ '/helpers' }],
		learnMore: [
			{
				pageMetaTags: { title: '@vela/pocketbase' },
				url: /* @wc-url */ '/helpers/pocketbase',
				description: 'This library is used to interact with PocketBase.'
			},
			{
				pageMetaTags: { title: '@vela/postgres' },
				url: /* @wc-url */ '/helpers/postgres',
				description: 'This library is used to interact with PostgreSQL.'
			},
			{
				pageMetaTags: { title: 'velastack/action' },
				url: /* @wc-url */ '/helpers/github-action',
				description: 'The GitHub Action for deploying Vela projects to a VPS.'
			}
		]
	};
};
