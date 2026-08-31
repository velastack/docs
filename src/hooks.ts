import { matchUrl } from '$locales/main.url';
import { deLocalizeDefault } from 'wuchale/url';
import { locales } from '$locales/data';
import { stripExtension } from '$lib/negotiate';

export const reroute = ({ url }) => {
	const pathname = stripExtension(url.pathname);
	const [upath, locale] = deLocalizeDefault(pathname, locales);
	const { path } = matchUrl(upath, locale);
	return path ?? pathname;
};
