<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>
	Vela uses shadcn-svelte for its UI components with no modifications. The add command is a wrapper
	around the shadcn-svelte add command. All components are installed to the <code
		>src/lib/components/ui</code
	> directory.
</p>
