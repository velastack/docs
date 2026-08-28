export const load = async ({ parent }) => {
	await parent();
	return {
		pageMetaTags: { title: 'S3' },
		breadcrumbs: [
			{ title: 'Disable', url: /* @wc-url */ '/disable' },
			{ title: 'S3', url: /* @wc-url */ '/disable/s3' }
		]
	};
};
