<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Enable SMTP email sending for your application.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable smtp`}</code></pre>

<p></p>

<p>You'll be prompted for configuration options for the SMTP email sending.</p>
