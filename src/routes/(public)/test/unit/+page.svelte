<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Unit tests are used to test individual units of code.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela test:unit`}</code></pre>

<p></p>

<h3>Tests</h3>
<p>
	Unit tests match the pattern <code>*.test.ts/*.spec.ts</code> and run on Vitest. They do not depend
	on the database and no test database will be created, unlike integration tests.
</p>
