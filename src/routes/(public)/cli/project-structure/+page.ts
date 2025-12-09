export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	return {
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'Project Structure',
				url: '/cli/project-structure'
			}
		]
	};
};
