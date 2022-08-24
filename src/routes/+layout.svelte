<script lang="ts">
	import type { User } from '$lib/structure';

	import '../app.css';
	import NavBar from './_componets/NavBar.svelte';

	export let data: { user?: User };
</script>

<NavBar user={data?.user} />

<div class="h-[calc(100vh-4rem)] bg-gray-100 ">
	<slot />
</div>
