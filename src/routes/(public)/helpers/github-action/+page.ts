export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	return {
		breadcrumbs: [...breadcrumbs, { title: 'shipvela/action', url: '/helpers/github-action' }]
	};
};
