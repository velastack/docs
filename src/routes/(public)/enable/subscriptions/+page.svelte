<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
</script>

<h1>Subscriptions</h1>

<div class="flex gap-1">
	<Badge variant="outline">Preview</Badge>
	<Badge variant="outline" href="/enable/payments" class="no-underline">Depends: payments</Badge>
</div>

<p></p>

<p>Enable plans and subscriptions with Stripe.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable subscriptions`}</code></pre>

<p></p>
