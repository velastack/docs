<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Generate fixture data for testing and development.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela fixtures generate`}</code></pre>

<p></p>

<p>
	This will generate fixture data in the <code>data/fixtures</code> directory. The order of files is
	determined by the database schema, tables that depend on other tables are saved later.
</p>

<p>
	Fixture data is generated with Faker.js via <a
		href="https://github.com/anatine/zod-plugins/tree/main/packages/zod-mock"
		target="_blank">@anatine/zod-mock</a
	>. The data is generated based on the database schema and the fields defined in the database
	models.
</p>

<h3>AI</h3>
<Badge variant="outline">Pro</Badge>

<p></p>
<p class="mb-0!">
	The fixtures generate command supports the <code>--ai</code> option for more realistic data generation.
</p>

<pre><code>$ vela fixtures generate --ai</code></pre>
