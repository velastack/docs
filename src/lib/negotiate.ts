import { createNegotiation } from 'sveltekit-negotiate';

export const { handle, reroute, negotiate, Negotiate } = createNegotiation({
	'text/markdown': { extension: '.md' }
});

const INDEX = '/index.md';

/**
 * `/foo.md` → `/foo`, and `/index.md` → `/` since the site root has no segment
 * to hang the extension off (and `/.md` would build to a dotfile).
 */
export function stripExtension(pathname: string): string {
	if (pathname.endsWith(INDEX)) {
		return pathname.slice(0, -INDEX.length) || '/';
	}

	return reroute(pathname);
}
