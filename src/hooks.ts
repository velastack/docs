import { matchUrl } from '$locales/main.url';
import { deLocalizeDefault } from 'wuchale/url';
import { locales } from '$locales/data';
import { reroute as negotiateReroute } from '$lib/negotiate';

// The site root has no segment to hang the extension off, so its markdown lives at
// /index.md rather than /.md. Every other path is the library's plain suffix strip.
const INDEX = '/index.md';

const stripExtension = (pathname: string) =>
	pathname.endsWith(INDEX) ? pathname.slice(0, -INDEX.length) || '/' : negotiateReroute(pathname);

export const reroute = ({ url }) => {
	const pathname = stripExtension(url.pathname);
	const [upath, locale] = deLocalizeDefault(pathname, locales);
	const { path } = matchUrl(upath, locale);
	return path ?? pathname;
};
