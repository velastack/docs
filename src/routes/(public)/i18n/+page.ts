export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'i18n' },
		breadcrumbs: [{ title: 'i18n', url: /* @wc-url */ '/i18n' }],
		learnMore: [
			{
				title: 'Extract',
				url: /* @wc-url */ '/i18n/extract',
				description: 'Extract translatable strings.'
			},
			{
				title: 'Watch',
				url: /* @wc-url */ '/i18n/watch',
				description: 'Watch for changes and extract strings.'
			},
			{
				title: 'Status',
				url: /* @wc-url */ '/i18n/status',
				description: 'Show i18n status.'
			},
			{
				title: 'Clean',
				url: /* @wc-url */ '/i18n/clean',
				description: 'Clean unused translation keys.'
			}
		]
	};
};
