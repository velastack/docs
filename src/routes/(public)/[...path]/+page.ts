import { error } from '@sveltejs/kit';
import { definePageMetaTags } from 'svelte-meta-tags';
import { locales } from '../../../locales/data';
import { deLocalize } from '$lib/url';

export const prerender = true;

export const load = async ({ params, url }) => {
	const modules: Record<string, () => Promise<{ default: any; metadata: any }>> = import.meta.glob(
		'../**/*.svx'
	) as Record<string, () => Promise<{ default: any; metadata: any }>>;

	const [path, locale] = deLocalize(url.pathname, locales);
	const fullPath = path === '/' ? `../${locale}.svx` : `..${path}/${locale}.svx`;
	const contentModule = modules[fullPath];

	if (!contentModule) {
		error(404, 'Page not found');
	}

	const { default: component, metadata } = await contentModule().then();

	const pageTags = definePageMetaTags({
		title: metadata.title
	});

	return { component, metadata, breadcrumbs: metadata.breadcrumbs, ...pageTags };
};

export const entries = async () => {
	const modules = import.meta.glob('../**/*.svx');

	const entries = Object.entries(modules)
		.filter(([path]) => !path.includes('+page.'))
		.map(([path]) => {
			const pagePath = path.replace('../', '').replace('.svx', '');
			const segments = pagePath.split('/');
			const locale = segments.at(-1) ?? 'en';
			const routePath = segments.slice(0, -1).join('/');
			const fullPath =
				locale === 'en'
					? routePath
						? `${routePath}`
						: ''
					: routePath
						? `${locale}/${routePath}`
						: `${locale}`;

			return {
				path: fullPath
			};
		});

	return entries;
};
