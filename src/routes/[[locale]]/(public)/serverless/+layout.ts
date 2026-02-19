import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async () => {
	const pageTags = definePageMetaTags({
		title: 'Serverless'
	});

	return {
		...pageTags,
		breadcrumbs: [
			{
				title: 'Serverless',
				url: '/serverless'
			}
		]
	};
};
