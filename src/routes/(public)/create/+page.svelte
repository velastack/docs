<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>The create command is used to initialize a new Vela project.</p>

<h3>Syntax</h3>

<pre><code>{`$ vela create <path>`}</code></pre>

<pre><code>$ vela create my-project</code></pre>

<p></p>

<p>
	This will create a directory called <code>my-project</code> with the new SvelteKit project. The CLI
	prompts will ask you for the superuser email and password for the new PocketBase database. The CLI
	will also prompt for the template to use for the project. Browse all of the available templates here.
</p>

<h3>Included Features</h3>

<p class="mb-0!">
	Out of the box, before enabling any modules, all Vela templates include these minimum features,
	which are deemed essential for a production-ready application:
</p>

<ul>
	<li>Database connection</li>
	<li>App metadata (app name, canonical domain)</li>
	<li>Tailwind CSS full height grid layout</li>
	<li>Error fallback page</li>
	<li>Light/dark mode support</li>
	<li>Integration tests</li>
	<li>Flash messages</li>
	<li>Toast notifications</li>
</ul>
