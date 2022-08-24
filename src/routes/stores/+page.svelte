<script lang="ts">
	import type { Store } from '$lib/structure';
	import RenderStore from './_componets/RenderStore.svelte';

	export let data: { stores: Store[] };

	const { stores } = data;
</script>

<div class="p-4 grid grid-cols-4 max-w-6xl m-auto">
	{#each stores as store (store.id)}
		<RenderStore {store} />
	{/each}
</div>
