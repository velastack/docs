<h1>Build</h1>

<p>Build the application for production.</p>

<h3>Syntax</h3>

<pre><code>{`$ vela build [--static]`}</code></pre>

<p></p>

<p>
	This will build the application for production. The build will be available in the <code
		>dist</code
	>
	directory.
</p>

<h3>Static</h3>

<p class="mb-0!">
	The static build mode will create a static site from the Vela project. The database will be
	started for the duration of the build, enabling data to be fetched from the database. See the <a
		href="/static">Static Site Generator</a
	> for more information on static builds.
</p>

<pre><code>{`$ vela build --static`}</code></pre>

<p>Under the hood, the static build mode replaces the SvelteKit adapter with the static adapter.</p>
