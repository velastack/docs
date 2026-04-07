export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Cloudflare',
		breadcrumbs: [
			{ title: 'Serverless', url: /* @wc-url */ '/serverless' },
			{ title: 'Cloudflare', url: /* @wc-url */ '/serverless/cloudflare' }
		]
	};
};
