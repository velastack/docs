<script lang="ts">
	import * as Item from '$lib/components/ui/item';
	import { Button } from '$lib/components/ui/button';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Manage internationalization in the SvelteKit project, powered by <a
		href="https://wuchale.dev/"
		target="_blank">Wuchale</a
	>.
</p>

<div class="not-prose space-y-2">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Extract</Item.Title>
			<Item.Description>Extract translatable strings.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/i18n/extract">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Watch</Item.Title>
			<Item.Description>Watch for changes and extract strings.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/i18n/watch">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Status</Item.Title>
			<Item.Description>Show i18n status.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/i18n/status">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Clean</Item.Title>
			<Item.Description>Clean unused translation keys.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/i18n/clean">Learn more</Button>
		</Item.Actions>
	</Item.Root>
</div>
