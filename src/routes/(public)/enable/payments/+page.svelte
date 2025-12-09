<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<div class="flex gap-1">
	<Badge variant="outline">Pro</Badge>
</div>

<p></p>

<p>Enable payment processing with Stripe.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable payments`}</code></pre>

<p></p>

<p>
	The payments module creates the necessary database tables and code for payment processing, webhook
	events, receipts, sweeps and more.
</p>

<h3>Database tables</h3>

<p class="mb-0!">The payments module creates the following database tables:</p>

<pre><code
		>stripe_products
stripe_prices
</code></pre>

<p></p>
<h3>Webhooks</h3>

<p>
	Stripe webhooks are scaffolded in <code>src/routes/webhooks/stripe</code>, with the payment intent
	succeeded event included by default.
</p>

<h3>Customers</h3>

<div class="flex gap-1">
	<Badge variant="outline" href="/enable/auth" class="no-underline">Depends: auth</Badge>
</div>

<p></p>

<p>
	If authentication is enabled with the <code>vela enable auth</code> command, Stripe customers will
	be created for the authenticated user on sign up and a user's payment methods can be saved and managed
	in the user's billing settings page.
</p>

<h3>Database tables</h3>

<p class="mb-0!">These additional tables are created if authentication is enabled:</p>

<pre><code
		>stripe_customers
stripe_payment_methods
transactions
</code></pre>

<p></p>
<h3>Webhooks</h3>

<p>
	In addition to the payment intent succeeded event, the payment method attached event is included
	by default for the authenticated user.
</p>

<h3>Cron jobs</h3>

<p>
	PocketBase cron jobs run to keep the application database in sync with Stripe. Products and prices
	are synced every two minutes, configured in <code>data/hooks/stripe.pb.js</code>. Stripe customers
	are synced as well if authentication is enabled. The cron jobs trigger HTTP requests to the
	application at <code>{'/api/stripe/sync/<type>'}</code>, with a shared secret key stored as an
	environment variable <code>INTERNAL_JOB_SECRET</code>.
</p>
