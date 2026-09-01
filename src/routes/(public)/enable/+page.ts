export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Enable' },
		breadcrumbs: [{ title: 'Enable', url: /* @wc-url */ '/enable' }],
		learnMore: [
			{
				title: 'Backend',
				url: /* @wc-url */ '/enable/backend',
				description: 'The PocketBase backend, hooks and data directory.'
			},
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
				title: 'Blog',
				url: /* @wc-url */ '/enable/blog',
				description: 'An mdsvex blog with posts, tags and an RSS feed.'
			},
			{
				title: 'Content Negotiation',
				url: /* @wc-url */ '/enable/content-negotiation',
				description: 'Serve the same route as HTML, Markdown or JSON.'
			},
			{
				title: 'i18n',
				url: /* @wc-url */ '/enable/i18n',
				description: 'Internationalization and locale-aware routing.'
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
				badge: 'Pro',
				description: 'Subscription plans for your application.'
			},
			{
				title: 'Notifications',
				url: /* @wc-url */ '/enable/notifications',
				badge: 'Planned',
				description: 'In-app notifications with a bell dropdown.'
			},
			{
				title: 'CMS',
				url: /* @wc-url */ '/enable/cms',
				description: 'Inline editing with an admin bar, served from the app itself.'
			}
		]
	};
};
