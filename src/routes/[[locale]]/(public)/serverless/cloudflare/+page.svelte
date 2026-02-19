<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Deploy your application to Cloudflare. You'll need a hosted database backend (we recommend <a
		href="https://pockethost.io"
		target="_blank">PocketHost</a
	>) and configured Cloudflare environment variables.
</p>

<pre><code
		>{`$ wrangler secret put POCKETBASE_URL
$ wrangler secret put POCKETBASE_SUPERUSER_EMAIL
$ wrangler secret put POCKETBASE_SUPERUSER_PASSWORD
$ wrangler deploy`}</code
	></pre>
