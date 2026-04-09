import { deLocalizeDefault, fillParams } from 'wuchale/url';
import type { Locale } from '$locales/data';
import { matchUrl } from '$locales/main.url';
import { locales } from '$locales/data';

export const defaultLocale = 'en';

export function localize(path: string, locale: Locale) {
	if (locale === defaultLocale) {
		return path;
	}

	return `/${locale}${path}`;
}

export const deLocalize = (path: string, locales: string[]) => {
	let iSecondSlash = path.indexOf('/', 2);
	if (iSecondSlash === -1) {
		iSecondSlash = path.length;
	}
	const locale = path.slice(1, iSecondSlash);
	if (!locales.includes(locale)) {
		return [path, defaultLocale];
	}
	let rest = path.slice(1 + locale.length);
	return [rest || '/', locale];
};

export function translateUrl(url: string, fromLocale: Locale, toLocale: Locale) {
	const [pathOnly] = deLocalizeDefault(url, locales);
	const result = matchUrl(pathOnly, fromLocale);
	if (result.path !== null) {
		const targetPath = fillParams(result.params, result.altPatterns[toLocale]);
		return localize(targetPath, toLocale);
	}
	return localize(url, toLocale);
}
