<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Vela enables you to rapidly scaffold fullstack projects with a focus on performance,
	accessibility, and developer experience. All functionality created with Vela aims to be the
	<b>canonical implementation</b> of the feature: <i>the correct way to do something</i>.
</p>

<p>
	Vela is a tool, not a framework. There is <b>no runtime, hidden framework code or abstractions</b
	>. As such, it enables complete control over the project, and serves as a jumping off point for
	building powerful applications. Vela favors code generation over abstractions, allowing the
	developer to extend and abstract as needed.
</p>

<p>
	At the core of Vela is the CLI, which is used to generate code. Vela draws inspiration from
	projects like Ruby on Rails and Laravel, while staying true to the SvelteKit philosophy and
	project structure.
</p>

<p>
	Where libraries are used, they are chosen for their <b>wide adoption, support and extensibility</b
	>. Projects created with Vela use SvelteKit, TypeScript, Tailwind CSS, Shadcn-Svelte, Superforms
	and Zod. In particular, Vela focuses on <b>full-stack type safety</b>, with types automatically
	generated and kept in sync with the database schema.
</p>

<p>
	Finally, Vela projects require <b>no special infrastructure or hosted services to run</b>. Vela
	embraces the traditional full-stack approach of a database and an application. This pair can be
	deployed to any VPS or built and deployed as a static site. Vela projects are not designed for
	serverless environments.
</p>
