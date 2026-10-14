import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { wuchale } from 'wuchale/vite';
import { mdsvexI18n } from './src/lib/mdsvex-i18n.js';

export default defineConfig({
	plugins: [
		wuchale(),
		mdsvexI18n(),
		tailwindcss(),
		sveltekit({
			extensions: ['.svelte', '.svx'],
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: [vitePreprocess(), mdsvex()],
			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),
			// Nothing here prerenders today. Set so that the day something does, its
			// canonical links come from the deployed domain rather than SvelteKit's
			// placeholder host. Since Kit 3 this also fixes `url.origin` and the
			// trusted CSRF origin at runtime.
			...(process.env.VELA_ORIGIN ? { paths: { origin: process.env.VELA_ORIGIN } } : {})
		})
	]
});
