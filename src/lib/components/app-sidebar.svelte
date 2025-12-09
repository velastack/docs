<script lang="ts" module>
	let data = {
		navMain: [
			{
				title: 'Getting Started',
				url: '/'
			},
			{
				title: 'Ethos',
				url: '/ethos'
			},
			{
				title: 'Backend',
				url: '/backend',
				items: [
					{
						title: 'PocketBase',
						url: '/backend/pocketbase'
					},
					{
						title: 'PostgreSQL',
						url: '/backend/postgres',
						badge: 'Preview'
					}
				]
			},
			{
				title: 'CLI Reference',
				url: '/cli',
				items: [
					{
						title: 'Installation',
						url: '/cli/installation'
					},
					{
						title: 'Environment Variables',
						url: '/cli/environment-variables'
					}
				]
			},
			{
				title: 'Create',
				url: '/create'
			},
			{
				title: 'Dev',
				url: '/dev'
			},
			{
				title: 'Build',
				url: '/build'
			},
			{
				title: 'Generate',
				url: '/generate',
				items: [
					{
						title: 'Form',
						url: '/generate/form'
					},
					{
						title: 'Resource',
						url: '/generate/resource'
					},
					{
						title: 'Schema',
						url: '/generate/schema'
					},
					{
						title: 'Scaffold',
						url: '/generate/scaffold'
					},
					{
						title: 'AI',
						url: '/generate/ai',
						badge: 'Pro'
					}
				]
			},
			{
				title: 'Destroy',
				url: '/destroy'
			},
			{
				title: 'Enable',
				url: '/enable',
				items: [
					{
						title: 'Auth',
						url: '/enable/auth'
					},
					{
						title: 'API',
						url: '/enable/api'
					},
					{
						title: 'API Keys',
						url: '/enable/api-keys'
					},
					{
						title: 'S3',
						url: '/enable/s3'
					},
					{
						title: 'SMTP',
						url: '/enable/smtp'
					},
					{
						title: 'Notifications',
						url: '/enable/notifications'
					},
					{
						title: 'Teams',
						url: '/enable/teams',
						badge: 'Pro'
					},
					{
						title: 'Payments',
						url: '/enable/payments',
						badge: 'Pro'
					},
					{
						title: 'Subscriptions',
						url: '/enable/subscriptions',
						badge: 'Preview'
					},
					{
						title: 'i18n',
						url: '/enable/i18n',
						badge: 'Preview'
					},
					{
						title: 'CMS',
						url: '/enable/cms',
						badge: 'Preview'
					},
					{
						title: 'Workflow',
						url: '/enable/workflow',
						badge: 'Preview'
					}
				]
			},
			{
				title: 'Disable',
				url: '/disable'
			},
			{
				title: 'Sync',
				url: '/sync'
			},
			{
				title: 'Test',
				url: '/test',
				items: [
					{
						title: 'Unit',
						url: '/test/unit'
					},
					{
						title: 'Integration',
						url: '/test/integration'
					}
				]
			},
			{
				title: 'Seeds',
				url: '/seeds',
				items: [
					{
						title: 'Save',
						url: '/seeds/save'
					},
					{
						title: 'Load',
						url: '/seeds/load'
					},
					{
						title: 'Clear',
						url: '/seeds/clear'
					}
				]
			},
			{
				title: 'Fixtures',
				url: '/fixtures',
				items: [
					{
						title: 'Generate',
						url: '/fixtures/generate'
					},
					{
						title: 'Load',
						url: '/fixtures/load'
					},
					{
						title: 'Clear',
						url: '/fixtures/clear'
					}
				]
			},
			{
				title: 'Legal',
				url: '/legal',
				items: [
					{
						title: 'Privacy',
						url: '/legal/privacy'
					},
					{
						title: 'Terms',
						url: '/legal/terms'
					}
				]
			},
			{
				title: 'UI',
				url: '/ui',
				items: [
					{
						title: 'Add',
						url: '/ui/add'
					},
					{
						title: 'Base',
						url: '/ui/base'
					}
				]
			},
			{
				title: 'Routes',
				url: '/routes'
			},
			{
				title: 'Provision',
				url: '/provision'
			},
			{
				title: 'Deploy',
				url: '/deploy'
			},
			{
				title: 'Serverless',
				url: '/serverless',
				items: [
					{
						title: 'Vercel',
						url: '/serverless/vercel'
					},
					{
						title: 'Netlify',
						url: '/serverless/netlify'
					},
					{
						title: 'Cloudflare',
						url: '/serverless/cloudflare'
					}
				]
			},
			{
				title: 'Static Site Generator',
				url: '/static'
			},
			{
				title: 'Account',
				url: '/account',
				items: [
					{
						title: 'Sign Up',
						url: '/account/signup'
					},
					{
						title: 'Login',
						url: '/account/login'
					},
					{
						title: 'Who Am I',
						url: '/account/whoami'
					},
					{
						title: 'Logout',
						url: '/account/logout'
					}
				]
			},
			{
				title: 'Helpers',
				url: '/helpers',
				items: [
					{
						title: 'PocketBase',
						url: '/helpers/pocketbase'
					},
					{
						title: 'PostgreSQL',
						url: '/helpers/postgres',
						badge: 'Preview'
					},
					{
						title: 'GitHub Action',
						url: '/helpers/github-action'
					}
				]
			}
		]
	};
</script>

<script lang="ts">
	import NavMain from './nav-main.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import type { ComponentProps } from 'svelte';

	let {
		meta,
		ref = $bindable(null),
		...restProps
	}: ComponentProps<typeof Sidebar.Root> & { meta: any } = $props();
</script>

<Sidebar.Root bind:ref variant="inset" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<div
								class="bg-sidebar-accent text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<img src="/favicon.svg" alt="logo" class="size-6" />
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-medium">{meta.appName}</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
	</Sidebar.Content>
	<Sidebar.Footer></Sidebar.Footer>
</Sidebar.Root>
