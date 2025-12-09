export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	return {
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'SMTP',
				url: '/enable/smtp'
			}
		]
	};
};
