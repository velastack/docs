<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<div class="flex gap-1">
	<Badge variant="outline">Preview</Badge>
</div>

<p></p>

<p>Enable Vela's content management system.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable cms`}</code></pre>

<p></p>
