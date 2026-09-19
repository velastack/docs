<script lang="ts">
	import RootLayout from './root-layout.svelte';

	let { children } = $props();
</script>

<RootLayout>
	{@render children?.()}
</RootLayout>
