<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<Badge variant="outline">Preview</Badge>
<p></p>
<p>Enable authentication with WhatsApp for your application.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable whatsapp`}</code></pre>

<p></p>

<p>You'll be prompted for configuration options for WhatsApp integration.</p>
