<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<div class="flex gap-1">
	<Badge variant="outline">Preview</Badge>
</div>

<p></p>

<p>
	Enable internationalization in the SvelteKit project, powered by <a
		href="https://wuchale.dev/"
		target="_blank">Wuchale</a
	>. You'll be prompted for configuration options for the internationalization. Once enabled, use
	the <code>vela i18n</code> <a href="/i18n">subcommands</a> to manage the internationalization.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable i18n`}</code></pre>

<p></p>

<p>
	Enabling i18n nests all routes inside a <code>/(lang)/</code> group, providing a base URL for the
	internationalization: <code>example.com/en</code> or <code>example.com/es</code>.
</p>
