<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { Separator } from '$lib/components/ui/separator';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Navbar from '$lib/components/ui/navbar';
	import * as ButtonGroup from '$lib/components/ui/button-group';
	import { locales, type Locale } from '$locales/data.js';
	import { deLocalizeDefault } from 'wuchale/url';
	import { goto } from '$app/navigation';
	import { translateUrl, defaultLocale } from '$lib/url';
	import * as Item from '$lib/components/ui/item';

	import { page } from '$app/state';

	let breadcrumbs = $derived(page.data.breadcrumbs || []) as { title: string; url: string }[];
	let badges = $derived(page.data.badges || []) as string[];
	let title = $derived(page.data.pageMetaTags?.title || '');
	let learnMore = $derived(page.data.learnMore || []) as {
		title: string;
		url: string;
		badge?: string;
		description?: string;
	}[];

	let { data, children } = $props();

	let locale: Locale = $derived.by(() => {
		const [_, locale] = deLocalizeDefault(page.url.pathname, locales);
		return locale ?? defaultLocale;
	});

	const localeNames: Record<string, string> = {
		en: 'English',
		es: 'Español'
	};

	const handleValueChange = (toLocale: Locale) => {
		const translatedUrl = translateUrl(page.url.pathname, locale, toLocale);
		goto(translatedUrl, { invalidateAll: true });
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
							class={locale !== 'en' ? 'opacity-50' : ''}
							onclick={() => handleValueChange('en')}
							data-sveltekit-preload-data="off">{localeNames['en']}</Button
						>
						<Button
							variant="outline"
							size="sm"
							class={locale !== 'es' ? 'opacity-50' : ''}
							onclick={() => handleValueChange('es')}
							data-sveltekit-preload-data="off">{localeNames['es']}</Button
						>
					</ButtonGroup.Root>
					<Button onclick={toggleMode} variant="ghost" size="icon">
						<Navbar.Mode />
					</Button>
				</div>
			</header>
			<div
				class="markdown-content flex flex-1 flex-col p-6 pt-0 text-foreground prose dark:prose-invert dark:prose-pre:bg-card prose-headings:mt-0 prose-headings:mb-2 prose-p:mt-0 prose-p:mb-4 prose-p:leading-relaxed prose-pre:mt-0 prose-pre:mb-4 prose-ul:mt-0"
			>
				<h1>{title}</h1>
				{#if badges.length > 0}
					<div class="not-prose mb-4 flex flex-wrap gap-1">
						{#each badges as text}
							<Badge variant="outline">{text}</Badge>
						{/each}
					</div>
				{/if}
				{@render children?.()}
				{#if learnMore.length > 0}
					<div class="not-prose space-y-2 mt-4">
						{#each learnMore as item}
							<Item.Root variant="outline">
								<Item.Content>
									<Item.Title>{item.title}</Item.Title>
									<Item.Description>{item.description}</Item.Description>
								</Item.Content>
								<Item.Actions>
									<Button variant="outline" size="sm" href={item.url}>Learn more</Button>
								</Item.Actions>
							</Item.Root>
						{/each}
					</div>
				{/if}
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
</div>

<style>
	:global(body:has(div.dashboard)) {
		background-color: var(--color-sidebar);
	}

	:global(.markdown-content pre:has(+ p)),
	:global(.markdown-content pre:has(+ h3)) {
		margin-bottom: 1rem;
	}
</style>
