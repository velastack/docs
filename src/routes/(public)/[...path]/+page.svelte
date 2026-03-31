<script lang="ts">
	import { page } from '$app/state';
	import { deLocalize } from '$lib/url';
	import { locales } from '../../../locales/data';
	import { Badge } from '$lib/components/ui/badge';

	let { data } = $props();
</script>

<h1>{data.metadata.title}</h1>
{#if Array.isArray(data.metadata.badges) && data.metadata.badges.length > 0}
	<div class="not-prose mb-4 flex flex-wrap gap-1">
		{#each data.metadata.badges as text}
			<Badge variant="outline">{text}</Badge>
		{/each}
	</div>
{/if}
<data.component />
