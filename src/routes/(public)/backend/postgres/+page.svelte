<h1>PostgreSQL</h1>

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
