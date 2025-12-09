<h1>Fixtures</h1>

<p>
	Fixtures are mock data for testing and development. They are stored in <code>data/fixtures</code> directory.
	Fixtures are loaded automatically for integration tests. Fixtures load after seed data and can depend
	on seed data records.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela fixtures <action>`}</code></pre>

<p></p>

<p class="mb-0!">The action can be one of the following:</p>

<ul>
	<li><code>load</code> - Load fixture data from the database</li>
	<li><code>save</code> - Save fixture data to the database</li>
	<li><code>clear</code> - Clear all fixture data from the database</li>
</ul>
