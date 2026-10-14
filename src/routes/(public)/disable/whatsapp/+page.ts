export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'WhatsApp' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'WhatsApp', url: /* @wc-url */ '/disable/whatsapp' }
		]
	};
};
