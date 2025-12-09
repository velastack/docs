<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Sync the database schema with the application TypeScript definitions.</p>

<h3>Syntax</h3>

<pre><code>{`$ vela sync`}</code></pre>

<p></p>

<p>
	This will sync the database schema with the application TypeScript definitions. This runs
	automatically after any database changes during local development.
</p>
