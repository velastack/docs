import { negotiate } from '$lib/negotiate';
import { markdownSource, pageTitle, toMarkdown } from '$lib/markdown.server';
import { getLocale } from '$locales/main.url';

export const load = async ({ locals, route, url }) => {
	// Nothing here is needed unless markdown was the negotiated type, so an ordinary
	// HTML render pays for none of it.
	if (!route.id || !locals.negotiate) {
		return {};
	}

	const source = markdownSource(route.id);
	if (!source) {
		return {};
	}

	const title = await pageTitle(route.id);

	return negotiate(locals, {
		'text/markdown': () => toMarkdown(source, getLocale(url), title)
	});
};
