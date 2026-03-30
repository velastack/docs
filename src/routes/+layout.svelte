<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';
	import { getFlash } from 'sveltekit-flash-message';
	import { toast } from 'svelte-sonner';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import { page } from '$app/state';
	import { Toaster } from '$lib/components/ui/sonner';

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
</script>

<MetaTags {...metaTags} />
<ModeWatcher />
<Toaster />

{@render children?.()}
