<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>
<Badge variant="outline">Pro</Badge>
<p></p>

<p>
	The AI command takes an optional prompt and spawns a local whiteboard interface for developing the
	database schema iteratively with AI. Requires a Vela Pro subscription.
</p>

<h3>Syntax</h3>

<pre><code>{`$ vela generate ai [prompt]`}</code></pre>

<pre><code
		>{`$ vela generate ai "appointment booking system for tailors"
Generating...
✨ Open the whiteboard interface at http://localhost:4371`}</code
	></pre>

<p></p>

<h3>Whiteboard</h3>

<p>
	The whiteboard interface allows you to design the database schema by dragging and dropping models,
	forms and scaffolding onto the canvas. Use the prompt input for fine-tuning the schema with AI.
</p>

<h3>Committing changes</h3>

<p>
	When you're happy with the schema, you can commit the changes to the database by clicking the
	Commit button. This will generate the necessary files and migrations.
</p>
