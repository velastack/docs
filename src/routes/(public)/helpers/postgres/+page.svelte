<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>
<div class="flex gap-1">
	<Badge variant="outline">Preview</Badge>
</div>

<p></p>

<p>This library is used to interact with PostgreSQL.</p>

<h4>handlePostgres</h4>
<p class="mb-0!">
	This function is used to configure the PocketBase middleware in <code>hooks.server.ts</code>.
</p>

<pre><code
		>{`import { handlePostgres } from '@vela/postgres';

export const handle = handlePostgres({
	connectionString: POSTGRES_CONNECTION_STRING
})`}</code
	></pre>
