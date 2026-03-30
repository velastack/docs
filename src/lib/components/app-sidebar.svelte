<script lang="ts">
	import NavMain from './nav-main.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import type { ComponentProps } from 'svelte';

	let data = {
		navMain: [
			{
				title: 'Getting Started',
				url: /* @wc-url */ '/'
			},
			{
				title: 'Ethos',
				url: /* @wc-url */ '/ethos'
			},
			{
				title: 'Backend',
				url: /* @wc-url */ '/backend',
				items: [
					{
						title: 'PocketBase',
						url: /* @wc-url */ '/backend/pocketbase'
					},
					{
						title: 'PostgreSQL',
						url: /* @wc-url */ '/backend/postgres',
						badge: 'Preview'
					}
				]
			},
			{
				title: 'CLI Reference',
				url: /* @wc-url */ '/cli',
				items: [
					{
						title: 'Installation',
						url: /* @wc-url */ '/cli/installation'
					},
					{
						title: 'Environment Variables',
						url: /* @wc-url */ '/cli/environment-variables'
					}
				]
			},
			{
				title: 'Create',
				url: /* @wc-url */ '/create'
			},
			{
				title: 'Dev',
				url: /* @wc-url */ '/dev'
			},
			{
				title: 'Build',
				url: /* @wc-url */ '/build'
			},
			{
				title: 'Generate',
				url: /* @wc-url */ '/generate',
				items: [
					{
						title: 'Form',
						url: /* @wc-url */ '/generate/form'
					},
					{
						title: 'Resource',
						url: /* @wc-url */ '/generate/resource'
					},
					{
						title: 'Schema',
						url: /* @wc-url */ '/generate/schema'
					},
					{
						title: 'Scaffold',
						url: /* @wc-url */ '/generate/scaffold'
					},
					{
						title: 'AI',
						url: /* @wc-url */ '/generate/ai',
						badge: 'Pro'
					}
				]
			},
			{
				title: 'Destroy',
				url: /* @wc-url */ '/destroy'
			},
			{
				title: 'Enable',
				url: /* @wc-url */ '/enable',
				items: [
					{
						title: 'Auth',
						url: /* @wc-url */ '/enable/auth'
					},
					{
						title: 'API',
						url: /* @wc-url */ '/enable/api'
					},
					{
						title: 'API Keys',
						url: /* @wc-url */ '/enable/api-keys'
					},
					{
						title: 'S3',
						url: /* @wc-url */ '/enable/s3'
					},
					{
						title: 'SMTP',
						url: /* @wc-url */ '/enable/smtp'
					},
					{
						title: 'Notifications',
						url: /* @wc-url */ '/enable/notifications'
					},
					{
						title: 'Teams',
						url: /* @wc-url */ '/enable/teams',
						badge: 'Pro'
					},
					{
						title: 'Payments',
						url: /* @wc-url */ '/enable/payments',
						badge: 'Pro'
					},
					{
						title: 'Subscriptions',
						url: /* @wc-url */ '/enable/subscriptions',
						badge: 'Preview'
					},
					{
						title: 'i18n',
						url: /* @wc-url */ '/enable/i18n',
						badge: 'Preview'
					},
					{
						title: 'CMS',
						url: /* @wc-url */ '/enable/cms',
						badge: 'Preview'
					},
					{
						title: 'Workflow',
						url: /* @wc-url */ '/enable/workflow',
						badge: 'Preview'
					},
					{
						title: 'WhatsApp',
						url: /* @wc-url */ '/enable/whatsapp',
						badge: 'Preview'
					}
				]
			},
			{
				title: 'Disable',
				url: /* @wc-url */ '/disable'
			},
			{
				title: 'i18n',
				url: /* @wc-url */ '/i18n',
				items: [
					{
						title: 'Extract',
						url: /* @wc-url */ '/i18n/extract'
					},
					{
						title: 'Watch',
						url: /* @wc-url */ '/i18n/watch'
					},
					{
						title: 'Status',
						url: /* @wc-url */ '/i18n/status'
					},
					{
						title: 'Clean',
						url: /* @wc-url */ '/i18n/clean'
					}
				]
			},
			{
				title: 'Sync',
				url: /* @wc-url */ '/sync'
			},
			{
				title: 'Test',
				url: /* @wc-url */ '/test',
				items: [
					{
						title: 'Unit',
						url: /* @wc-url */ '/test/unit'
					},
					{
						title: 'Integration',
						url: /* @wc-url */ '/test/integration'
					}
				]
			},
			{
				title: 'Seeds',
				url: /* @wc-url */ '/seeds',
				items: [
					{
						title: 'Save',
						url: /* @wc-url */ '/seeds/save'
					},
					{
						title: 'Load',
						url: /* @wc-url */ '/seeds/load'
					},
					{
						title: 'Clear',
						url: /* @wc-url */ '/seeds/clear'
					}
				]
			},
			{
				title: 'Fixtures',
				url: /* @wc-url */ '/fixtures',
				items: [
					{
						title: 'Generate',
						url: /* @wc-url */ '/fixtures/generate'
					},
					{
						title: 'Load',
						url: /* @wc-url */ '/fixtures/load'
					},
					{
						title: 'Clear',
						url: /* @wc-url */ '/fixtures/clear'
					}
				]
			},
			{
				title: 'Legal',
				url: /* @wc-url */ '/legal',
				items: [
					{
						title: 'Privacy',
						url: /* @wc-url */ '/legal/privacy'
					},
					{
						title: 'Terms',
						url: /* @wc-url */ '/legal/terms'
					}
				]
			},
			{
				title: 'UI',
				url: /* @wc-url */ '/ui',
				items: [
					{
						title: 'Add',
						url: /* @wc-url */ '/ui/add'
					},
					{
						title: 'Base',
						url: /* @wc-url */ '/ui/base'
					}
				]
			},
			{
				title: 'Routes',
				url: /* @wc-url */ '/routes'
			},
			{
				title: 'Provision',
				url: /* @wc-url */ '/provision'
			},
			{
				title: 'Deploy',
				url: /* @wc-url */ '/deploy'
			},
			{
				title: 'Serverless',
				url: /* @wc-url */ '/serverless',
				items: [
					{
						title: 'Vercel',
						url: /* @wc-url */ '/serverless/vercel'
					},
					{
						title: 'Netlify',
						url: /* @wc-url */ '/serverless/netlify'
					},
					{
						title: 'Cloudflare',
						url: /* @wc-url */ '/serverless/cloudflare'
					}
				]
			},
			{
				title: 'Static Site Generator',
				url: /* @wc-url */ '/static'
			},
			{
				title: 'Account',
				url: /* @wc-url */ '/account',
				items: [
					{
						title: 'Sign Up',
						url: /* @wc-url */ '/account/signup'
					},
					{
						title: 'Login',
						url: /* @wc-url */ '/account/login'
					},
					{
						title: 'Who Am I',
						url: /* @wc-url */ '/account/whoami'
					},
					{
						title: 'Logout',
						url: /* @wc-url */ '/account/logout'
					}
				]
			},
			{
				title: 'Helpers',
				url: /* @wc-url */ '/helpers',
				items: [
					{
						title: 'PocketBase',
						url: /* @wc-url */ '/helpers/pocketbase'
					},
					{
						title: 'PostgreSQL',
						url: /* @wc-url */ '/helpers/postgres',
						badge: 'Preview'
					},
					{
						title: 'GitHub Action',
						url: /* @wc-url */ '/helpers/github-action'
					}
				]
			}
		]
	};

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
