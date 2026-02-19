<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Vela includes a privacy policy generator to create a demo privacy policy for your application.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela legal privacy`}</code></pre>

<p></p>

<p>
	This will start a wizard to guide you through the process of creating a demo privacy policy for
	your application. The generated privacy policy is a placeholder and not a legal document. Seek
	legal advice for your specific use case.
</p>
