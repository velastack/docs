<script>
	import { Badge } from '$lib/components/ui/badge';
</script>

<h1>API Keys</h1>

<div class="flex gap-1">
	<Badge variant="outline" href="/enable/auth" class="no-underline">Depends: auth</Badge>
	<Badge variant="outline" href="/enable/api" class="no-underline">Depends: api</Badge>
</div>

<p></p>

<p>
	After enabling authentication and the API, API keys can be enabled by running the <code
		>vela enable api-keys</code
	>
	command. The command creates the necessary database tables and code for users to generate API keys
	connected to their account.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable api-keys`}</code></pre>

<p></p>

<p class="mb-0!">
	In SvelteKit, protected routes can be accessed with the API key in the
	<code>Authorization</code>
	header. The API key is validated using the PocketBase middleware in <code>hooks.server.ts</code>.
	The PocketBase collection used for API keys is <code>api_keys</code> by default.
</p>

<pre><code
		>{`import { handlePocketbase } from '@vela/pocketbase';

export const handle = handlePocketbase({
    api: {
        enabled: true,
        apiKeys: {
            enabled: true,
            collection: 'api_keys'
        }
    }
})`}</code
	></pre>

<p></p>
<h3>Database tables</h3>

<p class="mb-0!">The API keys module creates the following database tables:</p>

<pre><code>api_keys</code></pre>
