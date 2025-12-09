<script lang="ts">
	import * as Item from '$lib/components/ui/item';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
</script>

<h1>Enable</h1>

<p>
	The enable command is used to enable features in a Vela project. It can be used to enable
	authentication, API access, S3 storage, SMTP email sending, teams, payments and more. You'll be
	prompted for configuration options for each feature and the command will generate the necessary
	code.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable <feature>`}</code></pre>

<div class="not-prose space-y-2 mt-8">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Auth</Item.Title>
			<Item.Description>Authentication for your application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/auth">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>API</Item.Title>
			<Item.Description>REST API endpoints for your application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/api">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>API Keys</Item.Title>
			<Item.Description>API keys for your application's API.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/api-keys">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>S3</Item.Title>
			<Item.Description>S3 storage for file uploads.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/s3">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>SMTP</Item.Title>
			<Item.Description>SMTP email sending for your application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/api">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>
				Teams
				<Badge variant="outline">Pro</Badge>
			</Item.Title>
			<Item.Description>Team management for your application's users.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/teams">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title
				>Payments
				<Badge variant="outline">Pro</Badge>
			</Item.Title>
			<Item.Description>Payment processing with Stripe.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/payments">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title
				>Subscriptions
				<Badge variant="outline">Preview</Badge>
			</Item.Title>
			<Item.Description>Subscription plans for your application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/teams">Learn more</Button>
		</Item.Actions>
	</Item.Root>

	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title
				>CMS
				<Badge variant="outline">Preview</Badge>
			</Item.Title>
			<Item.Description>Content management system for your application.</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/enable/teams">Learn more</Button>
		</Item.Actions>
	</Item.Root>
</div>
