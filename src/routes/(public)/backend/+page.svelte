<script lang="ts">
	import * as Item from '$lib/components/ui/item';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
</script>

<h1>Backend</h1>

<p>
	Vela projects are designed as traditional full-stack applications: a database and an application.
	With the database running alongside the application, we see baseline performance that's
	significantly better than a serverless PaaS paired with a hosted database. We believe it's the
	better starting point for most projects. Initially, Vela supports PocketBase as a database, with
	PostgreSQL support coming soon.
</p>

<div class="not-prose space-y-2">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>PocketBase</Item.Title>
			<Item.Description>A lightweight, open-source database backend.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/backend/pocketbase">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title
				>PostgreSQL
				<Badge variant="outline">Preview</Badge>
			</Item.Title>
			<Item.Description>A powerful, full-featured database backend.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/backend/postgres">Coming soon</Button>
		</Item.Actions>
	</Item.Root>
</div>
