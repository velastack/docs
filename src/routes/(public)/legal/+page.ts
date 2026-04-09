export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Legal' },
		breadcrumbs: [{ title: 'Legal', url: /* @wc-url */ '/legal' }],
		learnMore: [
			{
				pageMetaTags: { title: 'Privacy Policy' },
				url: /* @wc-url */ '/legal/privacy',
				description: 'Create a demo privacy policy for the application.'
			},
			{
				pageMetaTags: { title: 'Terms of Service' },
				url: /* @wc-url */ '/legal/terms',
				description: 'Create a demo terms of service for the application.'
			}
		]
	};
};
