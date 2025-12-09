<h1>Destroy</h1>

<p>
	The destroy command is a tool for removing resources created with generate. It can be used to
	delete forms, resources, schemas and scaffolds. Generally, it's a no-op to call <code
		>vela generate</code
	>
	and then <code>vela destroy</code> on the same resource, with the exception that newly installed components
	or dependencies won't be removed as they may be required by other resources.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela destroy <type> <name>`}</code></pre>

<p></p>
<p class="mb-0!">The type can be one of the following:</p>

<ul>
	<li><code>form</code> - Destroy a form</li>
	<li><code>resource</code> - Destroy a resource</li>
	<li><code>schema</code> - Destroy a schema</li>
	<li><code>scaffold</code> - Destroy a scaffold</li>
</ul>
