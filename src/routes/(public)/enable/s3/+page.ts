export const load = async ({ parent }) => {
	await parent();
	return {
		title: 'S3',
		breadcrumbs: [
			{ title: 'Enable', url: /* @wc-url */ '/enable' },
			{ title: 'S3', url: /* @wc-url */ '/enable/s3' }
		]
	};
};
