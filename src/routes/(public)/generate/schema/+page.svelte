<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
</script>

<h1>Schema</h1>

<p>
	A schema is a Zod schema for validating data. Vela uses TypeScript definitions to ensure that the
	Zod schema is kept in sync with the database schema. If <code>fields</code> isn't provided, the schema
	will be generated based on the existing database schema.
</p>

<h3>Syntax</h3>

<pre><code>{`$ vela generate schema <name> [fields...]`}</code></pre>

<pre><code>$ vela generate schema categories name:string</code></pre>

<p class="mb-0!">
	This will create a Zod schema for a resource.<br />The file created is:
</p>

<pre><code>src/lib/schemas/category.ts</code></pre>
<p></p>

<h3>AI</h3>
<Badge variant="outline">Pro</Badge>

<p></p>
<p class="mb-0!">
	The generate schema command supports the <code>--ai</code> option for freeform text input in place
	of specifying the fields.
</p>

<pre><code>$ vela generate schema recipes --ai "a cooking recipe with ingredients and amounts"</code
	></pre>
