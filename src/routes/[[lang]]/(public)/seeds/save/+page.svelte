<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Save seed data from the database.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela seeds save`}</code></pre>

<p></p>

<p>
	This will save seed data from the database to the <code>data/seeds</code> directory. The order of files
	is determined by the database schema, tables that depend on other tables are saved later.
</p>
