<script lang="ts">
	import * as Item from '$lib/components/ui/item';
	import { Button } from '$lib/components/ui/button';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Although Vela has no runtime, it does include a few helpers for common tasks.</p>

<div class="not-prose space-y-2">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>@vela/pocketbase</Item.Title>
			<Item.Description>This library is used to interact with PocketBase.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/helpers/pocketbase">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>@vela/postgres</Item.Title>
			<Item.Description>This library is used to interact with PostgreSQL.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/helpers/postgres">Learn more</Button>
		</Item.Actions>
	</Item.Root>
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>shipvela/action</Item.Title>
			<Item.Description>The GitHub Action for deploying Vela projects to a VPS.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/helpers/github-action">Learn more</Button>
		</Item.Actions>
	</Item.Root>
</div>
