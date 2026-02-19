<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Vela includes a static build mode to create a static site, ready to be deployed to any hosting
	provider.
</p>

<h3>Limitations</h3>

<h4>Forms are not supported</h4>
<p>
	Form actions are not supported in static builds, you'll need to remove any forms from the project.
</p>

<h4>User authentication is not supported</h4>
<p>
	Static builds do not support dynamic server-side rendering, so user authentication is not
	supported.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela build --static`}</code></pre>

<p></p>

<p>
	This will build the application for production and create a static site in the <code>dist</code> directory.
</p>
