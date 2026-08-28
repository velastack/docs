// @ts-check
import { adapter as svelte } from '@wuchale/svelte';
import { adapter as js } from 'wuchale/adapter-vanilla';
import { defineConfig, pofile, storageByType } from 'wuchale';

// keeps URL translations in {locale}.url.po, which used to be pofile's
// separateUrls default before it was replaced by storageByType
const storage = storageByType({
	message: pofile({ location: 'src/locales/{locale}.po' }),
	url: pofile({ location: 'src/locales/{locale}.url.po' })
});

const url = { localize: 'src/lib/url.ts', patterns: ['/', '/**'] };

export default defineConfig({
	locales: ['en', 'es'],
	adapters: {
		main: svelte({
			loader: 'sveltekit',
			storage,
			url
		}),
		js: js({
			loader: 'vite',
			storage,
			files: ['src/**/+{page,layout}.{js,ts}', 'src/**/+{page,layout}.server.{js,ts}'],
			url
		})
	}
});
