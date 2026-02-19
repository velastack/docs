<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { Separator } from '$lib/components/ui/separator';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { Button } from '$lib/components/ui/button';
	import * as Navbar from '$lib/components/ui/navbar';
	import * as ButtonGroup from '$lib/components/ui/button-group';

	import { page } from '$app/state';

	let breadcrumbs = $derived(page.data.breadcrumbs || []) as { title: string; url: string }[];
	let { data, children } = $props();

	const defaultLocale = 'en';
	let locale = $derived(page.params.locale);

	const replaceLocale = (newLocale: string) => {
		const url = new URL(page.url);

		if (locale === undefined) {
			if (newLocale === defaultLocale) {
				return url.pathname;
			} else {
				return `/${newLocale}${url.pathname}`;
			}
		}

		if (url.pathname.startsWith(`/${newLocale}`)) {
			return url.pathname;
		} else if (url.pathname.startsWith(`/${locale}/`)) {
			if (newLocale === defaultLocale) {
				return url.pathname.replace(`/${locale}/`, '/');
			} else {
				return url.pathname.replace(`/${locale}/`, `/${newLocale}/`);
			}
		} else if (url.pathname.startsWith(`/${locale}`)) {
			if (newLocale === defaultLocale) {
				return url.pathname.replace(`/${locale}`, '/');
			} else {
				return `/${newLocale}${url.pathname}`;
			}
		} else {
			return `/${newLocale}${url.pathname}`;
		}
	};
</script>

<div class="min-h-dvh dashboard">
	<Sidebar.Provider>
		<AppSidebar meta={data.meta} />
		<Sidebar.Inset>
			<header class="flex h-16 shrink-0 items-center justify-between">
				<div class="flex items-center gap-2 px-6">
					<Sidebar.Trigger class="-ml-1" />
					<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
					{#if breadcrumbs.length > 0}
						<Breadcrumb.Root>
							<Breadcrumb.List>
								{#if breadcrumbs.length > 1}
									{#each breadcrumbs.slice(0, -1) as breadcrumb}
										<Breadcrumb.Item>
											<Breadcrumb.Link href={breadcrumb.url}>{breadcrumb.title}</Breadcrumb.Link>
										</Breadcrumb.Item>
										<Breadcrumb.Separator />
									{/each}
								{/if}
								<Breadcrumb.Page>
									{breadcrumbs[breadcrumbs.length - 1].title}
								</Breadcrumb.Page>
							</Breadcrumb.List>
						</Breadcrumb.Root>
					{/if}
				</div>
				<div class="px-4 gap-2 flex items-center">
					<ButtonGroup.Root class="hidden md:flex">
						<Button
							variant="outline"
							size="sm"
							class={locale !== undefined && locale !== 'en' ? 'opacity-50' : ''}
							href={replaceLocale('en')}
							data-sveltekit-preload-data="off">English</Button
						>
						<Button
							variant="outline"
							size="sm"
							class={locale !== 'es' ? 'opacity-50' : ''}
							href={replaceLocale('es')}
							data-sveltekit-preload-data="off">Español</Button
						>
					</ButtonGroup.Root>
					<Button onclick={toggleMode} variant="ghost" size="icon">
						<Navbar.Mode />
					</Button>
				</div>
			</header>
			<div
				class="flex flex-1 flex-col p-6 pt-0 text-foreground prose dark:prose-invert dark:prose-pre:bg-card prose-headings:mt-0 prose-headings:mb-2 prose-p:mt-0 prose-p:mb-4 prose-p:leading-relaxed prose-pre:mt-2 prose-pre:mb-2 prose-ul:mt-2"
			>
				{@render children?.()}
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
</div>

<style>
	:global(body:has(div.dashboard)) {
		background-color: var(--color-sidebar);
	}
</style>
