<script lang="ts">
	import type { Store } from '$lib/structure';
	import Item from './_componets/Item.svelte';

	export let data: { store: Store };
	const { store } = data;
</script>

<div class="w-full bg-gray-700 bg-contain relative h-[50vh] isolate overflow-hidden">
	<img src={store.banner} class="absolute inset-0 object-cover h-full z-10 w-full" alt="" />
	<div
		class="absolute inset-0 flex bg-gray-900 bg-opacity-30 backdrop-blur-[1px] z-20 justify-center align-middle place-items-center"
	>
		<div class="flex flex-col gap-2 justify-center align-middle place-items-center">
			<div class="text-center w-full flex flex-col gap-2">
				<h1 class="text-3xl font-bold text-gray-100 uppercase">{store.name}</h1>
				<h3 class="text-gray-200 font-medium text-lg">@{store.username}</h3>
			</div>
			<p class="max-w-md text-white w-full text-center">{store.description}</p>
		</div>
	</div>
</div>

<div class="max-w-screen-xl p-8 mx-auto grid grid-cols-4 gap-8">
	<!-- <h2 class="text-2xl bg-gray-600 w-fit px-6 py-2 mb-4">Store Items</h2> -->
	{#each store.items as item (item.id)}
		<Item {item} />
	{:else}
		<p>this store dose not have any item yet</p>
	{/each}
</div>
