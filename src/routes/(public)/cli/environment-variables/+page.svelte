<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p class="mb-0!">
	Vela uses environment variables to configure the project. The environment variables are stored in
	the local <code>.env</code> file by default. The Vela CLI and PocketBase backend rely on the following
	environment variables:
</p>

<pre><code
		>{`POCKETBASE_URL=http://localhost:8090
POCKETBASE_SUPERUSER_EMAIL=admin@example.com
POCKETBASE_SUPERUSER_PASSWORD=password`}</code
	></pre>

<p></p>

<p>
	You'll be prompted to create a PocketBase superuser account when you run the <code
		>vela create</code
	>
	command. The login details are saved in the <code>.env</code> file. The superuser account is used by
	the CLI, the admin interface and the REST API.
</p>
