<script lang="ts">
	import * as Item from '$lib/components/ui/item';
	import { Button } from '$lib/components/ui/button';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>The Vela CLI is a command-line interface for creating and managing Vela projects.</p>

<div class="not-prose space-y-2">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Installation</Item.Title>
			<Item.Description>How to install the CLI.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/cli/installation">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Environment Variables</Item.Title>
			<Item.Description>Environment variables used by the CLI and backend.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/cli/environment-variables">Learn more</Button>
		</Item.Actions>
	</Item.Root>
</div>
