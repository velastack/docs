import { definePageMetaTags } from 'svelte-meta-tags';

export const load = async ({ parent }) => {
	const { breadcrumbs } = await parent();

	const pageTags = definePageMetaTags({
		title: 'WhatsApp'
	});

	return {
		...pageTags,
		breadcrumbs: [
			...breadcrumbs,
			{
				title: 'WhatsApp',
				url: '/enable/whatsapp'
			}
		]
	};
};
