<script lang="ts">
	import supabase from '$lib/supaBaseConfig.js';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	let members: any[] = [];
	onMount(async () => {
		const { data, error } = await supabase.from('Members').select('*');
		if (error) {
			throw error;
		}
		members = data;
	});
</script>

{#if members}
	<center>
		{#each members as member}
			<div class="card inline-block m-10 max-w-xs">
				<header class="card-header"><h1>{member.Name}</h1></header>
				<section class="p-4">
					<Icon icon="fluent:person-24-filled" width="200px" color="firebrick"/>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore autem rerum ad totam vero
					voluptatum soluta atque eum.
				</section>
				<footer class="card-footer"><h2>{member.Role}</h2></footer>
			</div>
		{/each}
	</center>
{:else}
	<h1>Loading members...</h1>
{/if}
