<script lang="ts">
	import * as Item from '$lib/components/ui/item';
	import { Button } from '$lib/components/ui/button';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Vela includes a privacy policy and terms of service generator to create a demo privacy policy and
	terms of service for your application.
</p>

<div class="not-prose space-y-2">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Privacy Policy</Item.Title>
			<Item.Description>Create a demo privacy policy for the application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/legal/privacy">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Terms of Service</Item.Title>
			<Item.Description>Create a demo terms of service for the application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/legal/terms">Learn more</Button>
		</Item.Actions>
	</Item.Root>
</div>
