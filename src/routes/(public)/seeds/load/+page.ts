export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Load',
		breadcrumbs: [
			{ title: 'Seeds', url: /* @wc-url */ '/seeds' },
			{ title: 'Load', url: /* @wc-url */ '/seeds/load' }
		]
	};
};
