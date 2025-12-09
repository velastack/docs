export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	return {
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'Load',
				url: '/fixtures/load'
			}
		]
	};
};
