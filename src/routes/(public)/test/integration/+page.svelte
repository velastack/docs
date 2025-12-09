<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Integration tests cover the full application stack, including the database.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela test:integration`}</code></pre>

<p></p>

<h3>Test files</h3>
<p>
	Integration tests match the pattern <code>*.integration.ts</code> and run on Vitest. A test database
	will be created and all migrations applied before the tests are run. Any seed data and fixtures will
	be loaded before the tests are run. Integration tests created by Vela mostly run as HTTP requests to
	the application.
</p>

<h3>Frontend</h3>

<p>
	Integration tests do not include any frontend code. They are only concerned with the backend and
	database. Large speed benefits are gained by excluding the frontend bundle from the test runner.
</p>
