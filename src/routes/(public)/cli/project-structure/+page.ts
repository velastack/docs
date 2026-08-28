export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'Project Structure' },
		breadcrumbs: [
			{ title: 'CLI Reference', url: /* @wc-url */ '/cli' },
			{ title: 'Project Structure', url: /* @wc-url */ '/cli/project-structure' }
		]
	};
};
