export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	return {
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'API Keys',
				url: '/enable/api-keys'
			}
		]
	};
};
