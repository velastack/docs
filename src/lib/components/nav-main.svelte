<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { Badge } from '$lib/components/ui/badge';
	import { page } from '$app/state';

	const isActive = (url: string) => {
		return page.url.pathname === url || `${page.url.pathname}/` === url;
	};

	let {
		items
	}: {
		items: {
			title: string;
			url: string;
			items?: {
				title: string;
				url: string;
				badge?: string;
			}[];
		}[];
	} = $props();

	let locale = $derived(page.params.locale);

	function prependLocale(url: string) {
		if (locale === undefined) {
			return url;
		}

		return `/${locale}${url}`;
	}
</script>

<Sidebar.Group>
	<Sidebar.Menu>
		{#each items as item (item.title)}
			{@const url = prependLocale(item.url)}
			<Sidebar.MenuItem>
				<Sidebar.MenuButton isActive={isActive(url)}>
					{#snippet child({ props })}
						<a href={url} {...props}>
							<span>{item.title}</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
				{#if item.items?.length}
					<Sidebar.MenuSub>
						{#each item.items as subItem (subItem.title)}
							{@const url = prependLocale(subItem.url)}
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton isActive={isActive(url)}>
									{#snippet child({ props })}
										<a href={url} {...props}>
											{subItem.title}
											{#if subItem.badge}
												<Badge variant="outline">{subItem.badge}</Badge>
											{/if}
										</a>
									{/snippet}
								</Sidebar.MenuSubButton>
							</Sidebar.MenuSubItem>
						{/each}
					</Sidebar.MenuSub>
				{/if}
			</Sidebar.MenuItem>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
