import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { wuchale } from 'wuchale/vite';
import { mdsvexI18n } from './src/lib/mdsvex-i18n.js';

export default defineConfig({
	plugins: [wuchale(), mdsvexI18n(), tailwindcss(), sveltekit()]
});
