export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'UI' },
		breadcrumbs: [{ title: 'UI', url: /* @wc-url */ '/ui' }],
		learnMore: [
			{
				pageMetaTags: { title: 'Add' },
				url: /* @wc-url */ '/ui/add',
				description: 'Add a new Shadcn-Svelte component to the application.'
			},
			{
				pageMetaTags: { title: 'Base' },
				url: /* @wc-url */ '/ui/base',
				description: 'Change the base color of the application.'
			}
		]
	};
};
