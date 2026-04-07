export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Workflow',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'Workflow', url: /* @wc-url */ '/enable/workflow' }
		]
	};
};
