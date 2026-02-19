<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>
<p>
	Vela is a fullstack command line tool for rapidly scaffolding modern web apps. Rather than a
	framework, Vela prioritizes extensibility and developer control by generating editable code, not
	hidden abstractions.
</p>

<h3>Installation</h3>

To install the CLI, run the following command:
<pre><code>npm install -g vela</code></pre>

Verify the installation by running:
<pre><code>vela --version</code></pre>

<p></p>

<h3>Create a Project</h3>

To create a new project, run the following command:
<pre><code>vela create my-project</code></pre>

<p>This will create a new directory called <code>my-project</code> with the project files.</p>

<h3>Run the Project</h3>

To run the project, run the following command:
<pre><code>cd my-project</code></pre>
<pre><code>npm run dev</code></pre>
