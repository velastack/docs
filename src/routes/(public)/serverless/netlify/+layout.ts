export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	return {
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'Netlify',
				url: '/serverless/netlify'
			}
		]
	};
};
