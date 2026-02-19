import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { wuchale } from '@wuchale/vite-plugin';

export default defineConfig({
	plugins: [wuchale(), tailwindcss(), sveltekit()],
	test: {
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					setupFiles: ['test/setup.ts']
				}
			}
		]
	}
});
