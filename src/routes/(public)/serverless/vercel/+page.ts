export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Vercel',
		breadcrumbs: [
			{ title: 'Serverless', url: /* @wc-url */ '/serverless' },
			{ title: 'Vercel', url: /* @wc-url */ '/serverless/vercel' }
		]
	};
};
