<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import * as config from '$lib/config';
	import Header from './header.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><img src="./RoboCat.png" alt="bengalLogo" class="max-w-xs max-h-28" /> </a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div>
					<ul class="flex flex-row s">
						<li class="pr-10">
							<a href="Members" class="btn variant-ghost-primary">Members</a>
						</li>
						<li class="pr-10">
							<a href="Projects" class="btn variant-ghost-primary">Projects</a>
						</li>
						<li class="pr-10">
							<a href="Sponsers" class="btn variant-ghost-primary">Sponsers</a>
						</li>
						<li class="pr-10">
							<a href="Donate" class="btn variant-ghost-primary">Donate</a>
						</li>
					</ul>
				</div>
			</svelte:fragment>
		</AppBar>
		<hr />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
	hr {
		background-color: whitesmoke;
		height: 12px;
	}
</style>
