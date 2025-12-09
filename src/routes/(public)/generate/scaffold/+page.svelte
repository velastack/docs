<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
</script>

<h1>Scaffold</h1>

<p>
	A scaffold is a full CRUD interface for a resource. It includes the index, view, create and edit
	pages, a schema definition and a database model. If <code>fields</code> isn't provided, the scaffold
	will be generated based on the existing database schema.
</p>

<h3>Syntax</h3>

<pre><code>{`$ vela generate scaffold <name> [fields...]`}</code></pre>

<pre><code>$ vela generate scaffold pets name:string age:number</code></pre>

<p class="mb-0!">
	This will create a full CRUD interface for the pets resource at <code>/pets</code>, the database
	model and Zod schema definition, and the database migration file.<br />The files created are:
</p>

<pre><code
		>src/routes/pets/+page.svelte
src/routes/pets/+page.server.ts
src/routes/pets/new/+page.svelte
src/routes/pets/new/+page.server.ts
src/routes/pets/[id]/+page.svelte
src/routes/pets/[id]/+page.server.ts
src/routes/pets/[id]/edit/+page.svelte
src/routes/pets/[id]/edit/+page.server.ts
src/lib/schemas/pet.ts
migrations/created_pets.ts
</code></pre>
<p></p>

<h3>AI</h3>
<Badge variant="outline">Pro</Badge>

<p></p>
<p class="mb-0!">
	The generate scaffold command supports the <code>--ai</code> option for freeform text input in place
	of specifying the fields.
</p>

<pre><code>$ vela generate scaffold hotels --ai "listing info for hotels"</code></pre>
