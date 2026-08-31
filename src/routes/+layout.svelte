<script lang="ts">
	import '../app.css';
	import '../prism-vsc-dark-plus.css';

	import { ModeWatcher } from 'mode-watcher';
	import { getFlash } from 'sveltekit-flash-message';
	import { toast } from 'svelte-sonner';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import { page } from '$app/state';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Negotiate } from '$lib/negotiate';

	let { data, children } = $props();
	const flash = getFlash(page);

	$effect(() => {
		if (!$flash || $flash.type !== 'toast') {
			return;
		}

		toast.message($flash.message);

		$flash = undefined;
	});

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));

	// Advertises the markdown representation of this page. The root has no
	// segment to suffix, so it gets /index.md rather than /.md.
	let markdownUrl = $derived.by(() => {
		const path = page.url.pathname.replace(/\.md$/, '');
		return path === '/' ? '/index.md' : `${path}.md`;
	});
</script>

<svelte:head>
	<link rel="alternate" type="text/markdown" href={markdownUrl} />
</svelte:head>

<MetaTags {...metaTags} />
<Negotiate />
<ModeWatcher />
<Toaster />

{@render children?.()}
