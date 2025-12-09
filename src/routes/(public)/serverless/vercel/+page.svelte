<h1>Vercel</h1>

<p>
	Deploy your application to Vercel. You'll need a hosted database backend (we recommend <a
		href="https://pockethost.io"
		target="_blank">PocketHost</a
	>) and configured Vercel environment variables.
</p>

<pre><code
		>{`$ vercel env add POCKETBASE_URL <url>
$ vercel env add POCKETBASE_SUPERUSER_EMAIL <email>
$ vercel env add POCKETBASE_SUPERUSER_PASSWORD <password>
$ vercel deploy`}</code
	></pre>
