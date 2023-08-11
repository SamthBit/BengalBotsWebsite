<script>
	import { onMount } from 'svelte';
	import supabase from '$lib/supaBaseConfig';
	let members = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Members').select();
		members = data;
		console.table(data);
	});
</script>
