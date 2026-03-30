<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Enable S3 storage for file uploads. Normally, file uploads are stored on the local filesystem.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable s3`}</code></pre>

<p></p>

<p>
	You'll be prompted for configuration options for the S3 storage. Once configured, file uploads
	will be stored in the S3 bucket. No other changes are necessary, file retrievals are handled
	automatically.
</p>
