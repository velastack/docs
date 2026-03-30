<script lang="ts">
	const { data } = $props();
</script>

<h1>{data.pageMetaTags.title}</h1>

<p>Deploy the application to a previously provisioned VPS.</p>

<h3>Syntax</h3>

<pre><code>{`$ vela deploy <host> --domain <domain>`}</code></pre>

<p></p>

<p>
	Vela will deploy the application to the previously provisioned VPS. The connection is made via SSH
	and the application is deployed using the <code>vela-deploy</code> script. On deploy, any new migrations
	are run against the server's database.
</p>

<h3>Deploy History</h3>

<p>
	If logged in, you can view your project's deploy history on <a
		href="https://velastack.dev"
		target="_blank">velastack.dev</a
	>.
</p>

<h3>GitHub Action</h3>

<p class="mb-0!">
	Use the <code>velastack/action</code> to deploy the application from a GitHub workflow. We
	recommend using the <code>webfactory/ssh-agent</code> action to manage the deploy host SSH key
	secret. The
	<code>velastack/action</code> API key is not required but allows deployment history to be tracked on
	velastack.dev.
</p>

<pre><code
		>{`jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: webfactory/ssh-agent@v0.9.0
        with:
          ssh-private-key: $\{{ secrets.SSH_PRIVATE_KEY }}
      - uses: velastack/action@v1
        with:
          host: $\{{ secrets.DEPLOY_HOST }}
		  domain: example.com
          api_key: $\{{ secrets.VELA_API_KEY }}
`}</code
	></pre>

<p></p>
<h3>Preview and Branch Deploys</h3>

<p class="mb-0!">
	Multiple instances of the application can be deployed to the same VPS, internally using different
	ports. Point a wildcard subdomain to the VPS's IP address, for example <code
		>*.dev.example.com</code
	>.
</p>

<pre><code
		>{`jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: webfactory/ssh-agent@v0.9.0
        with:
          ssh-private-key: $\{{ secrets.SSH_PRIVATE_KEY }}
      - name: Select domain
        run: |
          BRANCH="$\{GITHUB_REF_NAME}"
          if [ "$\{BRANCH}" = "main" ]; then
            echo "DOMAIN=example.com" >> "$\{GITHUB_ENV}"
          else
            echo "DOMAIN=$\{BRANCH}.dev.example.com" >> "$\{GITHUB_ENV}"
          fi
      - uses: velastack/action@v1
        with:
          host: $\{{ secrets.DEPLOY_HOST }}
          api_key: $\{{ secrets.VELA_API_KEY }}
          domain: $\{{ env.DOMAIN }}
`}</code
	></pre>
