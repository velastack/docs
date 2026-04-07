export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Environment Variables',
		breadcrumbs: [
			{ title: 'CLI Reference', url: /* @wc-url */ '/cli' },
			{ title: 'Environment Variables', url: /* @wc-url */ '/cli/environment-variables' }
		]
	};
};
