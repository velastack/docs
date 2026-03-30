<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Load seed data from the database. Run automatically for integration tests.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela seeds load`}</code></pre>

<p></p>

<p>
	This will load seed data into the database. Seed data files are loaded in alphabetical order and
	prefixed with a number to ensure deterministic loading order.
</p>
