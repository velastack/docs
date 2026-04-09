export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Serverless' },
		breadcrumbs: [{ title: 'Serverless', url: /* @wc-url */ '/serverless' }],
		learnMore: [
			{
				pageMetaTags: { title: 'Vercel' },
				url: /* @wc-url */ '/serverless/vercel',
				description: 'Deploy your application to Vercel'
			},
			{
				pageMetaTags: { title: 'Netlify' },
				url: /* @wc-url */ '/serverless/netlify',
				description: 'Deploy your application to Netlify'
			},
			{
				pageMetaTags: { title: 'Cloudflare' },
				url: /* @wc-url */ '/serverless/cloudflare',
				description: 'Deploy your application to Cloudflare'
			}
		]
	};
};
