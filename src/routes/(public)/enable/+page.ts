export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Enable' },
		breadcrumbs: [{ title: 'Enable', url: /* @wc-url */ '/enable' }],
		learnMore: [
			{
				title: 'Auth',
				url: /* @wc-url */ '/enable/auth',
				description: 'Authentication for your application.'
			},
			{
				title: 'API',
				url: /* @wc-url */ '/enable/api',
				description: 'REST API endpoints for your application.'
			},
			{
				title: 'API Keys',
				url: /* @wc-url */ '/enable/api-keys',
				description: "API keys for your application's API."
			},
			{
				title: 'S3',
				url: /* @wc-url */ '/enable/s3',
				description: 'S3 storage for file uploads.'
			},
			{
				title: 'SMTP',
				url: /* @wc-url */ '/enable/smtp',
				description: 'SMTP email sending for your application.'
			},
			{
				title: 'Teams',
				url: /* @wc-url */ '/enable/teams',
				badge: 'Pro',
				description: "Team management for your application's users."
			},
			{
				title: 'Payments',
				url: /* @wc-url */ '/enable/payments',
				badge: 'Pro',
				description: 'Payment processing with Stripe.'
			},
			{
				title: 'Subscriptions',
				url: /* @wc-url */ '/enable/subscriptions',
				badge: 'Preview',
				description: 'Subscription plans for your application.'
			},
			{
				title: 'CMS',
				url: /* @wc-url */ '/enable/cms',
				badge: 'Preview',
				description: 'Content management system for your application.'
			}
		]
	};
};
