<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	PocketBase is a lightweight, open-source database backend. It's a great choice for small to
	medium-sized projects. It runs on a local SQLite database. It comes with a built-in admin
	interface and a REST API.
</p>

<p class="mb-0!">In Vela, the PocketBase database is configured in <code>hooks.server.ts</code>:</p>

<pre><code
		>{`import { handlePocketbase } from '@vela/pocketbase';
import {
    POCKETBASE_URL,
    POCKETBASE_SUPERUSER_EMAIL,
    POCKETBASE_SUPERUSER_PASSWORD
} from '$env/static/private';

export const handle = handlePocketbase({
	pocketbaseUrl: POCKETBASE_URL,
	superuserEmail: POCKETBASE_SUPERUSER_EMAIL,
	superuserPassword: POCKETBASE_SUPERUSER_PASSWORD
})`}</code
	></pre>

<p></p>

<p>
	When running the project, the PocketBase admin interface is available at <code>/admin</code>. The
	public REST API (if enabled) is available at <code>/api</code>.
</p>

<p class="mb-0!">
	Two different clients are available for interacting with the PocketBase database: the admin API
	and the user-scoped API. These are provided in the <code>locals</code> object in the SvelteKit server
	context.
</p>

<pre><code
		>{`export const load = async ({ locals }) => {
    const posts = await locals.admin.collection('posts').getFullList();
    const posts = await locals.pb.collection('posts').getFullList();
    return { posts };
}`}</code
	></pre>
