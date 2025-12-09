<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	The basic building block of any website or application is the form. If you don't need a database
	backend, you can use the form generator to create a simple form. Ideal for contact or feedback
	forms where the data isn't persisted.
</p>

<h3>Syntax</h3>

<pre><code>{`$ vela generate form <name> [fields...]`}</code></pre>

<pre><code>$ vela generate form contact name:string email:string message:text</code></pre>

<p class="mb-0!">
	This will create a form at <code>/contact</code> and a Zod schema definition for form validation.<br
	/>The files created are:
</p>

<pre><code
		>src/routes/contact/+page.svelte
src/routes/contact/+page.server.ts
src/lib/schemas/contact.ts
</code></pre>

<p></p>

<h3>AI</h3>
<Badge variant="outline">Pro</Badge>

<p></p>
<p class="mb-0!">
	The generate form command supports the <code>--ai</code> option for freeform text input in place of
	specifying the fields.
</p>

<pre><code>$ vela generate form contact --ai "a feedback form with a 1-5 star rating"</code></pre>
