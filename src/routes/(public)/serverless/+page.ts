export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Serverless',
		breadcrumbs: [{ title: 'Serverless', url: /* @wc-url */ '/serverless' }]
	};
};
