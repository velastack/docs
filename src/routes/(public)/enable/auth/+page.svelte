<h1>Auth</h1>

<p>
	Authentication (user accounts) is enabled by running the <code>vela enable auth</code> command. This
	will prompt for configuration options. The auth module creates all necessary code for authentication,
	including login, logout, sign up, password reset, email verification and more.
</p>

<h3>Syntax</h3>

<pre><code>{`$ vela enable auth`}</code></pre>

<p></p>

<h3>Protected routes</h3>

<p class="mb-0!">
	Once enabled, a group of protected routes is automatically created, defaulting to <code
		>(app)</code
	>. Any routes placed within this group will be protected and require authentication to access.
	Unauthenticated users will be redirected to the login page. The protected routes and the login
	path for redirection can be configured in the middleware in <code>hooks.server.ts</code>, defaults
	shown below:
</p>

<pre><code
		>{`import { handlePocketbase } from '@vela/pocketbase';

export const handle = handlePocketbase({
    auth: {
        enabled: true,
        protectedRoutes: ['/(app)'],
        loginPath: '/login'
    }
})`}</code
	></pre>

<p></p>
<h3>OAuth</h3>

<p>
	OAuth is supported out of the box with PocketBase. Configure the OAuth providers in the PocketBase
	admin interface. Any enabled OAuth provider will be available in the authentication flow.
</p>

<h3>Subsequent scaffolds</h3>

<p>
	Once auth is enabled, subsequent scaffolded routes will automatically be created within the
	protected <code>(app)</code> group.
</p>
