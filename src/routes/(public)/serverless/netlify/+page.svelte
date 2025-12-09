<h1>Netlify</h1>

<p>
	Deploy your application to Netlify. You'll need a hosted database backend (we recommend <a
		href="https://pockethost.io"
		target="_blank">PocketHost</a
	>) and configured Netlify environment variables.
</p>

<pre><code
		>{`$ netlify env:set POCKETBASE_URL <url>
$ netlify env:set POCKETBASE_SUPERUSER_EMAIL <email>
$ netlify env:set POCKETBASE_SUPERUSER_PASSWORD <password>
$ netlify deploy`}</code
	></pre>
