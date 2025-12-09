<script lang="ts">
	import * as Item from '$lib/components/ui/item';
	import { Button } from '$lib/components/ui/button';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Serverless is not the recommended approach for Vela projects. Vela projects are designed as
	traditional full-stack applications: a database and an application. With the database running
	alongside the application, we see baseline performance that's significantly better than a
	serverless PaaS paired with a hosted database. We believe it's the better starting point for most
	projects.
</p>

<p>Regardless, with some limitations, serverless can be a viable option:</p>

<h3>Limitations</h3>

<h4>Database latency overhead</h4>

<p>
	When using a serverless PaaS, the database is hosted on a remote server. This introduces latency
	overhead on every request.
</p>

<h4>Reduced caching</h4>

<p>
	A long-running server process can cache data in memory and avoid database queries. This is not
	possible with serverless, as the server is terminated after each request.
</p>

<h4>Automatic migrations</h4>

<p>
	With separate database and application hosts, automatic migrations are not supported. You'll need
	to manually run migrations after each deploy.
</p>

<h3>PocketBase hosting</h3>

<p>
	We recommend <a href="https://pockethost.io" target="_blank">PocketHost</a> as a hosted solution
	for PocketBase. Set up a database instance and then configure the
	<code>POCKETBASE_URL</code> environment variable in your project.
</p>

<div class="not-prose space-y-2">
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Vercel</Item.Title>
			<Item.Description>Deploy your application to Vercel</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/serverless/vercel">Learn more</Button>
		</Item.Actions>
	</Item.Root>
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Netlify</Item.Title>
			<Item.Description>Deploy your application to Netlify</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/serverless/netlify">Learn more</Button>
		</Item.Actions>
	</Item.Root>
	<Item.Root variant="outline">
		<Item.Content>
			<Item.Title>Cloudflare</Item.Title>
			<Item.Description>Deploy your application to Cloudflare</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="outline" size="sm" href="/serverless/cloudflare">Learn more</Button>
		</Item.Actions>
	</Item.Root>
</div>
