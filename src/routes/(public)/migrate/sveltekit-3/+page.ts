export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'SvelteKit 3' },
		breadcrumbs: [
			{ title: 'Migrate', url: /* @wc-url */ '/migrate' },
			{ title: 'SvelteKit 3', url: /* @wc-url */ '/migrate/sveltekit-3' }
		]
	};
};
