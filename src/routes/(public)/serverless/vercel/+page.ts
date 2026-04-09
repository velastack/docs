export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Vercel' },
		breadcrumbs: [
			{ title: 'Serverless', url: /* @wc-url */ '/serverless' },
			{ title: 'Vercel', url: /* @wc-url */ '/serverless/vercel' }
		]
	};
};
