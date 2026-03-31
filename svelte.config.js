import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			handleUnseenRoutes: 'warn',
			entries: [
				'/',
				'/ethos',
				'/backend',
				'/backend/pocketbase',
				'/backend/postgres',
				'/cli',
				'/cli/installation',
				'/cli/environment-variables',
				'/create',
				'/dev',
				'/build',
				'/generate',
				'/generate/form',
				'/generate/resource',
				'/generate/schema',
				'/generate/scaffold',
				'/generate/ai',
				'/destroy',
				'/enable',
				'/enable/auth',
				'/enable/api',
				'/enable/api-keys',
				'/enable/s3',
				'/enable/smtp',
				'/enable/notifications',
				'/enable/teams',
				'/enable/payments',
				'/enable/subscriptions',
				'/enable/i18n',
				'/enable/cms',
				'/enable/workflow',
				'/enable/whatsapp',
				'/disable',
				'/i18n',
				'/i18n/extract',
				'/i18n/watch',
				'/i18n/status',
				'/i18n/clean',
				'/sync',
				'/test',
				'/test/unit',
				'/test/integration',
				'/seeds',
				'/seeds/save',
				'/seeds/load',
				'/seeds/clear',
				'/fixtures',
				'/fixtures/generate',
				'/fixtures/load',
				'/fixtures/clear',
				'/legal',
				'/legal/privacy',
				'/legal/terms',
				'/ui',
				'/ui/add',
				'/ui/base',
				'/routes',
				'/provision',
				'/deploy',
				'/serverless',
				'/serverless/vercel',
				'/serverless/netlify',
				'/serverless/cloudflare',
				'/static',
				'/account',
				'/account/signup',
				'/account/login',
				'/account/whoami',
				'/account/logout',
				'/helpers',
				'/helpers/pocketbase',
				'/helpers/postgres',
				'/helpers/github-action'
			]
		}
	}
};

export default config;
