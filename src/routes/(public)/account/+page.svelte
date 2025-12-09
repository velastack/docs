<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	An account is not required to use the Vela CLI. Paid features, templates and AI options require it
	however. An API key is generated for the CLI and stored in <code>~/.vela/config.json</code>.
</p>

<h3>Deploy History</h3>

<p>If logged in, you can view your deploy history on shipvela.com.</p>
