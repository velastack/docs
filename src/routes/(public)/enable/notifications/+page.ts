export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	return {
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'S3',
				url: '/enable/s3'
			}
		]
	};
};
