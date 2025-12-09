<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<div class="flex gap-1">
	<Badge variant="outline">Pro</Badge>
	<Badge variant="outline" href="/enable/auth" class="no-underline">Depends: auth</Badge>
</div>

<p></p>

<p>Enable team management, roles and permissions for your application's users.</p>

<h3>Syntax</h3>
<pre><code>{`$ vela enable teams`}</code></pre>

<p></p>

<p>
	The teams module creates the necessary database tables and code for team management, including
	team creation, team members, roles, invitations and more.
</p>

<h3>Ownership and permissions</h3>

<p class="mb-0!">
	Once enabled, teams can be used as a target for ownership and permissions using the special <code
		>current_team</code
	> field type. Members of a team can access data associated with the team.
</p>

<pre><code>$ vela generate model projects title:string team:current_team</code></pre>

<p></p>
<h3>Database tables</h3>

<p class="mb-0!">Enabling <code>teams</code> creates the following database tables:</p>

<pre><code
		>teams
team_users
team_memberships
team_invites</code
	></pre>
