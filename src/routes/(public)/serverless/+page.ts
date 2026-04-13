export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Serverless' },
		breadcrumbs: [{ title: 'Serverless', url: /* @wc-url */ '/serverless' }],
		learnMore: [
			{
				title: 'Vercel',
				url: /* @wc-url */ '/serverless/vercel',
				description: 'Deploy your application to Vercel'
			},
			{
				title: 'Netlify',
				url: /* @wc-url */ '/serverless/netlify',
				description: 'Deploy your application to Netlify'
			},
			{
				title: 'Cloudflare',
				url: /* @wc-url */ '/serverless/cloudflare',
				description: 'Deploy your application to Cloudflare'
			}
		]
	};
};
