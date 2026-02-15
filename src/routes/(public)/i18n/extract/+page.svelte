<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Extract translatable strings.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela i18n extract`}</code></pre>
