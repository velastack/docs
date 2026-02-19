<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>This library is used to interact with PocketBase.</p>

<h4>handlePocketbase</h4>
<p class="mb-0!">
	This function is used to configure the PocketBase middleware in <code>hooks.server.ts</code>.
</p>

<pre><code
		>{`import { handlePocketbase } from '@vela/pocketbase';

export const handle = handlePocketbase({
	pocketbaseUrl: POCKETBASE_URL,
	superuserEmail: POCKETBASE_SUPERUSER_EMAIL,
	superuserPassword: POCKETBASE_SUPERUSER_PASSWORD
})`}</code
	></pre>

<p></p>
<h4>setDefaultData</h4>
<p class="mb-0!">
	This function is used to set the default data for a form from a PocketBase record in a server
	action.
</p>

<pre><code
		>{`import { setDefaultData } from '@vela/pocketbase';

export const actions = {
	default: async ({ locals, request }) => {
        const record = await locals.admin.collection('posts').getOne(1);
        setDefaultData(form, record);
        return { form };
    }
}`}</code
	></pre>

<p></p>
<h4>setPocketbaseErrors</h4>
<p class="mb-0!">
	This function is used to set PocketBase errors as Superforms errors when a form submission fails.
</p>

<pre><code
		>{`import { setPocketbaseErrors } from '@vela/pocketbase';

export const actions = {
	default: async ({ locals, request }) => {
        try {
            await locals.admin.collection('posts').create(form.data);
        } catch (error) {
            setPocketbaseErrors(form, error);
            return fail(400, { form });
        }
    }
}`}</code
	></pre>
