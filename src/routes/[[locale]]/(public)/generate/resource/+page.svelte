<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	A resource is a collection of data that is stored in the database. For models that don't require a
	frontend interface, you can use the resource generator to create a simple resource. For existing
	models, the <code>fields</code> option can be omitted and the generator will use the existing fields.
</p>

<h3>Syntax</h3>

<pre><code>{`$ vela generate resource <name> [fields...]`}</code></pre>

<pre><code>$ vela generate resource categories name:string</code></pre>

<p class="mb-0!">
	This will create a database model and a Zod schema definition for the resource.<br />The files
	created are:
</p>

<pre><code
		>src/lib/schemas/category.ts
migrations/created_categories.ts
</code></pre>
<p></p>

<h3>AI</h3>
<Badge variant="outline">Pro</Badge>

<p></p>
<p class="mb-0!">
	The generate resource command supports the <code>--ai</code> option for freeform text input in place
	of specifying the fields.
</p>

<pre><code>$ vela generate resource categories --ai "book categories"</code></pre>
