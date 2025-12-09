<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
</script>

<h1>Generate</h1>

<p>
	Vela provides a generator for creating database models, forms, resources, schemas and full CRUD
	scaffolds. Each of these shares a common syntax. Within the syntax, singular and plural forms have
	significance.
</p>

<h3>Syntax</h3>
<pre><code>{`$ vela generate <type> <name> [fields...]`}</code></pre>

<p></p>

<h3>Name</h3>
<p>
	The plural name of the model, form, resource, schema or scaffold, for example <code>pets</code> or
	<code>todos</code>. Model names are always plural and will be converted to plural if the singular
	form is provided. Names can be nested within directories by using a slash (<code>/</code>)
	separator. For example, <code>users/pets</code> will create a resource at
	<code>/users/pets</code>.
</p>

<h3>Fields</h3>
<p>
	The fields are defined as <code>name:type</code> pairs, for example <code>name:string</code> or
	<code>age:number</code>. If the model already exists in the database, the <code>fields</code> option
	can be omitted and the generator will use the existing fields.
</p>

<h3>Field types</h3>

<p class="mb-0!">Vela supports the following field types:</p>

<pre><code
		>text
number
bool
date
email
password
url
editor
autodate
select
file/files
json
geoPoint
relation</code
	></pre>

<p></p>

<h3>autodate</h3>

<p>
	The <code>autodate</code> field type is a special field type that automatically sets the field to
	the current date and time on creation or update. The field names for autodate can be:
	<code>created/created_at</code>
	or <code>updated/updated_at</code>.
</p>

<h3>select</h3>

<p class="mb-0!">
	The select field has special syntax for defining the options. The options are defined as
	<code>value:label</code> pairs. The singular or plural form of the field name determines whether the
	select acts as a single or multi-select.
</p>

<pre><code>model pets type:select(dog:Dog,cat:Cat,bird:Bird)</code></pre>

<pre><code>model products colors:select(red:Red,green:Green,blue:Blue)</code></pre>

<p></p>
<h3>file</h3>

<p class="mb-0!">
	The file field is used to upload files to the server. The single or plural form of the field name
	determines whether the field accepts a single file or an array of files.
</p>

<pre><code>model owners avatar:file</code></pre>
<pre><code>model pets photos:files</code></pre>

<p></p>

<h3>Required fields</h3>
<p class="mb-0!">
	Fields are marked as required by appending <code>!</code> to the field name. This marks the field as
	required in the database and the Zod schema for form validation.
</p>

<pre><code>model pets name:string! age:number!</code></pre>

<p></p>
<h3>Relationships</h3>

<p class="mb-0!">
	In addition to the field types above, Vela supports passing in the name of any existing model to
	create a relationship. Single vs plural has significance here, as it determines whether the
	relationship is a one-to-many or many-to-many.
</p>

<pre><code>model pets name:string owner:user</code></pre>
<pre><code>model teams name:string members:users</code></pre>

<p class="mb-0!">
	Similarly to Ruby on Rails, the shorthand <code>references</code> can be used to create relationships
	based on the field name.
</p>

<pre><code>model posts title:string author:user tags:references</code></pre>

<p></p>

<h3>Ownership and permissions</h3>

<div class="flex gap-1 mb-2">
	<Badge variant="outline" href="/enable/auth" class="no-underline">Depends: auth</Badge>
</div>

<p class="mb-0!">
	If authentication is enabled with the <code>vela enable auth</code> command, it's possible to
	associate models with the authenticated user. This can be done directly on the model with the
	special <code>current_user</code> field type, which will automatically set the field to the authenticated
	user on creation (and exclude the field from the frontend form).
</p>

<pre><code>model posts title:string author:current_user</code></pre>

<p class="mb-0!">
	If the model is nested within another model, vela traverses the model heirchay to find the nearest
	parent model with a relationship to the authenticated user.
</p>

<pre><code
		>model teams name:string
model users email:string team:references
model projects title:text team:references</code
	></pre>

<p>
	In this example, the <code>users</code> model is associated with the <code>teams</code> model.
	Access to the <code>projects</code> model is restricted to users who are members of the project's team.
</p>

<h4>Usage</h4>

<p>
	In the generated SvelteKit project, there's two ways to retrieve data from the database. The first
	is the admin API <code>locals.admin</code> equivalent to querying the database directly. The
	second is the user-scoped API
	<code>locals.pb</code> which provides access to the database scoped to the authenticated user.
</p>

<h4 class="mb-0!">Admin API</h4>

<pre><code
		>{`export const load = async ({ locals }) => {
    const posts = await locals.admin.collection('posts').getFullList();
    return { posts };
}`}</code
	></pre>

<p></p>

<h4 class="mb-0!">User-scoped API</h4>

<pre><code
		>{`export const load = async ({ locals }) => {
    const posts = await locals.pb.collection('posts').getFullList();
    return { posts };
}`}</code
	></pre>

<p></p>

<h4>Limitations</h4>

<p class="mb-0!">Ownership via backreference is not supported.</p>
