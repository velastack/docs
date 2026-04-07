export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'WhatsApp',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'WhatsApp', url: /* @wc-url */ '/enable/whatsapp' }
		]
	};
};
