export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Helpers' },
		breadcrumbs: [{ title: 'Helpers', url: /* @wc-url */ '/helpers' }],
		learnMore: [
			{
				title: '@velastack/pocketbase',
				url: /* @wc-url */ '/helpers/pocketbase',
				description:
					'PocketBase bindings for SvelteKit: middleware, a typed client and form helpers.'
			},
			{
				title: '@velastack/kit',
				url: /* @wc-url */ '/helpers/kit',
				description: 'Backend-agnostic SvelteKit plumbing shared by the bindings packages.'
			},
			{
				title: '@velastack/postgres',
				url: /* @wc-url */ '/helpers/postgres',
				badge: 'Planned',
				description: 'PostgreSQL bindings for SvelteKit.'
			},
			{
				title: 'velastack/action',
				url: /* @wc-url */ '/helpers/github-action',
				description: 'The GitHub Action for deploying Vela projects to a server.'
			}
		]
	};
};
