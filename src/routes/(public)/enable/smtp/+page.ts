export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'SMTP' },
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'SMTP', url: /* @wc-url */ '/enable/smtp' }
		]
	};
};
