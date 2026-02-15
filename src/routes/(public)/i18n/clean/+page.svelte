<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Clean unused translation keys.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela i18n clean`}</code></pre>
