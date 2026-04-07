export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Base',
		breadcrumbs: [
			{ title: 'UI', url: /* @wc-url */ '/ui' },
			{ title: 'Base', url: /* @wc-url */ '/ui/base' }
		]
	};
};
