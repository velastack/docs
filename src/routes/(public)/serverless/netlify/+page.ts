export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Netlify',
		breadcrumbs: [
			{ title: 'Serverless', url: /* @wc-url */ '/serverless' },
			{ title: 'Netlify', url: /* @wc-url */ '/serverless/netlify' }
		]
	};
};
