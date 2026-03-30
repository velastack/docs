<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>
<Badge variant="outline">Preview</Badge>
<p></p>

<p class="mb-0!">
	PostgreSQL support is coming soon. Configuration is done in <code>hooks.server.ts</code>:
</p>

<pre><code
		>{`import { handlePostgres } from '@vela/postgres';
import {
    POSTGRES_CONNECTION_STRING
} from '$env/static/private';

export const handle = handlePostgres({
    connectionString: POSTGRES_CONNECTION_STRING
})`}</code
	></pre>
