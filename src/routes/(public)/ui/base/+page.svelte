<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>The base command changes the base color of the application.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela ui base <color>`}</code></pre>

<pre><code>$ vela ui base slate</code></pre>

<p></p>

<p>This will change the base color of the application to slate.</p>

<h3>Colors</h3>

<p class="mb-0!">Vela supports the following colors:</p>

<pre><code
		>slate
gray
zinc
neutral
stone</code
	></pre>
