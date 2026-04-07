export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'Terms',
		breadcrumbs: [
			{ title: 'Legal', url: /* @wc-url */ '/legal' },
			{ title: 'Terms', url: /* @wc-url */ '/legal/terms' }
		]
	};
};
