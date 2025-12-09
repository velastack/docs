<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Check your account details on shipvela.com. The API key for the CLI is stored in <code
		>~/.vela/config.json</code
	>.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela whoami`}</code></pre>

<p></p>

<p>This will display your account details.</p>
