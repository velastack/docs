<h1>Provision</h1>

<p>Provision a VPS for deploys. Any host that supports SSH can be used.</p>

<h3>Syntax</h3>

<pre><code>{`$ vela provision <host>`}</code></pre>

<p></p>

<p>
	Vela will provision a VPS for the application. The connection is made via SSH and the VPS is
	provisioned using the <code>vela-provision</code> script. After provisioning, the application can
	be deployed with the <code>vela deploy</code> command.
</p>

<h3>Stack</h3>

<p class="mb-0!">Vela sets up the following stack on the VPS:</p>

<ul class="mb-2!">
	<li>Caddy with automatic HTTPS</li>
	<li>Systemd for process management</li>
</ul>

<p>
	Deploys are pushed to <code>/srv/app</code> on the VPS. Two processes are started with systemd: the
	Node server and the database.
</p>

<h3>Requirements</h3>

<p>
	For HTTPS to be automatically provisioned on deploy, the VPS must have a public IP address and a
	domain must be pointed to the IP address. This enables Caddy to automatically provision HTTPS
	certificates.
</p>
