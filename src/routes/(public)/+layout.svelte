<script lang="ts">
	import RootLayout from './root-layout.svelte';
	import { page } from '$app/state';
	import { deLocalize } from '$lib/url';
	import { locales } from '../../locales/data';

	let [path, locale] = $derived.by(() => deLocalize(page.url.pathname, locales));

	let { data, children } = $props();
</script>

<RootLayout {data}>
	{@render children?.()}
</RootLayout>
