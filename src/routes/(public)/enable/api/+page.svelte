<h1>API</h1>

<p>
	The REST API is enabled by running the <code>vela enable api</code> command, or by modifying the
	<code>hooks.server.ts</code>
	file. This exposes the PocketBase REST API at <code>/api</code>. Any SvelteKit API routes in the
	<code>src/routes/api</code> directory are served alongside the PocketBase API.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable api`}</code></pre>

<p></p>

<h3>API Configuration</h3>

<p class="mb-0!">
	The API is configured in the <code>hooks.server.ts</code> file. The default configuration is:
</p>

<pre><code
		>{`import { handlePocketbase } from '@vela/pocketbase';

export const handle = handlePocketbase({
    api: {
        enabled: true
    }
});`}</code
	></pre>

<p></p>
<h3>PocketBase API Routes</h3>

<p class="mb-0!">
	The following PocketBase API routes are exposed and take precedence over any SvelteKit API routes.
</p>

<pre><code
		>{`/api/batch
/api/collections
/api/realtime
/api/files
/api/settings
/api/logs
/api/crons
/api/backups
/api/health`}</code
	></pre>
