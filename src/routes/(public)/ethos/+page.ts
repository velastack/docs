export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Ethos',
		breadcrumbs: [{ title: 'Ethos', url: /* @wc-url */ '/ethos' }]
	};
};
