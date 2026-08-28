export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'SMTP' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'SMTP', url: /* @wc-url */ '/disable/smtp' }
		]
	};
};
