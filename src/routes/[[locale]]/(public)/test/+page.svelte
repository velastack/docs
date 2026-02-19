<script lang="ts">
	import * as Item from '$lib/components/ui/item';
	import { Button } from '$lib/components/ui/button';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	The test command is used to run the unit and integration tests for your application. Vela uses
	Vitest for testing and includes tests for all generated code.
</p>

<div class="not-prose space-y-2">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Unit</Item.Title>
			<Item.Description>Unit tests for your application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/test/unit">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Integration</Item.Title>
			<Item.Description>Integration tests for your application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/test/integration">Learn more</Button>
		</Item.Actions>
	</Item.Root>
</div>
