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
				title: 'CLI Reference',
				url: /* @wc-url */ '/cli',
				items: [
					{
						title: 'Installation',
						url: /* @wc-url */ '/cli/installation'
					},
					{
						title: 'Project Structure',
						url: /* @wc-url */ '/cli/project-structure'
					},
					{
						title: 'Environment Variables',
						url: /* @wc-url */ '/cli/environment-variables'
					}
				]
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
						badge: 'Planned'
					}
				]
			},
			{
				title: 'Create',
				url: /* @wc-url */ '/create'
			},
			{
				title: 'Bless',
				url: /* @wc-url */ '/bless'
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
				title: 'Preview',
				url: /* @wc-url */ '/preview'
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
						title: 'Migration',
						url: /* @wc-url */ '/generate/migration'
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
				url: /* @wc-url */ '/destroy',
				items: [
					{
						title: 'Form',
						url: /* @wc-url */ '/destroy/form'
					},
					{
						title: 'Resource',
						url: /* @wc-url */ '/destroy/resource'
					},
					{
						title: 'Schema',
						url: /* @wc-url */ '/destroy/schema'
					},
					{
						title: 'Scaffold',
						url: /* @wc-url */ '/destroy/scaffold'
					},
					{
						title: 'Deployment',
						url: /* @wc-url */ '/destroy/deployment'
					}
				]
			},
			{
				title: 'Enable',
				url: /* @wc-url */ '/enable',
				items: [
					{
						title: 'Backend',
						url: /* @wc-url */ '/enable/backend'
					},
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
						title: 'Blog',
						url: /* @wc-url */ '/enable/blog'
					},
					{
						title: 'Content Negotiation',
						url: /* @wc-url */ '/enable/content-negotiation'
					},
					{
						title: 'i18n',
						url: /* @wc-url */ '/enable/i18n'
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
						badge: 'Pro'
					},
					{
						title: 'Notifications',
						url: /* @wc-url */ '/enable/notifications',
						badge: 'Planned'
					},
					{
						title: 'CMS',
						url: /* @wc-url */ '/enable/cms'
					}
				]
			},
			{
				title: 'Disable',
				url: /* @wc-url */ '/disable',
				items: [
					{
						title: 'Auth',
						url: /* @wc-url */ '/disable/auth'
					},
					{
						title: 'API',
						url: /* @wc-url */ '/disable/api'
					},
					{
						title: 'API Keys',
						url: /* @wc-url */ '/disable/api-keys'
					},
					{
						title: 'Backend',
						url: /* @wc-url */ '/disable/backend'
					},
					{
						title: 'Content Negotiation',
						url: /* @wc-url */ '/disable/content-negotiation'
					},
					{
						title: 'i18n',
						url: /* @wc-url */ '/disable/i18n'
					},
					{
						title: 'S3',
						url: /* @wc-url */ '/disable/s3'
					},
					{
						title: 'SMTP',
						url: /* @wc-url */ '/disable/smtp'
					},
					{
						title: 'Teams',
						url: /* @wc-url */ '/disable/teams',
						badge: 'Pro'
					},
					{
						title: 'Payments',
						url: /* @wc-url */ '/disable/payments',
						badge: 'Pro'
					}
				]
			},
			{
				title: 'Migrate',
				url: /* @wc-url */ '/migrate',
				items: [
					{
						title: 'Up',
						url: /* @wc-url */ '/migrate/up'
					},
					{
						title: 'Down',
						url: /* @wc-url */ '/migrate/down'
					},
					{
						title: 'Create',
						url: /* @wc-url */ '/migrate/create'
					},
					{
						title: 'Collections',
						url: /* @wc-url */ '/migrate/collections'
					},
					{
						title: 'History Sync',
						url: /* @wc-url */ '/migrate/history-sync'
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
						title: 'Server',
						url: /* @wc-url */ '/test/server'
					},
					{
						title: 'Unit',
						url: /* @wc-url */ '/test/unit',
						badge: 'Planned'
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
					},
					{
						title: 'Reset',
						url: /* @wc-url */ '/fixtures/reset'
					},
					{
						title: 'Regen',
						url: /* @wc-url */ '/fixtures/regen'
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
				title: 'Routes',
				url: /* @wc-url */ '/routes'
			},
			{
				title: 'OAuth',
				url: /* @wc-url */ '/oauth',
				badge: 'Planned'
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
				title: 'Status',
				url: /* @wc-url */ '/status'
			},
			{
				title: 'Logs',
				url: /* @wc-url */ '/logs'
			},
			{
				title: 'Rollback',
				url: /* @wc-url */ '/rollback'
			},
			{
				title: 'Backup',
				url: /* @wc-url */ '/backup',
				items: [
					{
						title: 'Create',
						url: /* @wc-url */ '/backup/create'
					},
					{
						title: 'List',
						url: /* @wc-url */ '/backup/list'
					},
					{
						title: 'Download',
						url: /* @wc-url */ '/backup/download'
					},
					{
						title: 'Delete',
						url: /* @wc-url */ '/backup/delete'
					},
					{
						title: 'Schedule',
						url: /* @wc-url */ '/backup/schedule'
					}
				]
			},
			{
				title: 'Restore',
				url: /* @wc-url */ '/restore'
			},
			{
				title: 'Targets',
				url: /* @wc-url */ '/targets'
			},
			{
				title: 'Env',
				url: /* @wc-url */ '/env',
				items: [
					{
						title: 'List',
						url: /* @wc-url */ '/env/list'
					},
					{
						title: 'Set',
						url: /* @wc-url */ '/env/set'
					},
					{
						title: 'Unset',
						url: /* @wc-url */ '/env/unset'
					},
					{
						title: 'Import',
						url: /* @wc-url */ '/env/import'
					}
				]
			},
			{
				title: 'Admin',
				url: /* @wc-url */ '/admin',
				items: [
					{
						title: 'Create',
						url: /* @wc-url */ '/admin/create'
					}
				]
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
				title: 'Link',
				url: /* @wc-url */ '/link'
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
						title: 'Kit',
						url: /* @wc-url */ '/helpers/kit'
					},
					{
						title: 'PostgreSQL',
						url: /* @wc-url */ '/helpers/postgres',
						badge: 'Planned'
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
