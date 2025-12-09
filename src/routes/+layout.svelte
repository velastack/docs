<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';
	import { getFlash } from 'sveltekit-flash-message';
	import { toast } from 'svelte-sonner';
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
</script>

<svelte:head>
	<title>{data.meta.appName}</title>
</svelte:head>

<ModeWatcher />
<Toaster />

{@render children?.()}
