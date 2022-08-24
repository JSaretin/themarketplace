<script lang="ts">
	import { page } from '$app/stores';

	import type { Store } from '$lib/structure';
	export let store: Store;
	const storeUri = new URL($page.url.pathname.concat('/' + store.username), $page.url.origin).href;
</script>

<a href={storeUri} sveltekit:prefetch>
	<div class="flex flex-col rounded-md shadow-sm w-full shadow-gray-400 overflow-hidden h-[300px]">
		<div class="relative isolate flex-1 h-[200px] w-full bg-gray-800 overflow-hidden">
			<img src={store.banner} class="absolute z-10 inset-0 object-cover" alt="" />
			<div
				class="absolute inset-0 z-20 backdrop-blur-[1px] flex justify-center align-middle place-items-center"
			>
				<div class="z-30 h-[100px] w-[100px] rounded-full overflow-hidden border-2">
					<img src={store.preview} alt={store.name} class="w-full h-full object-cover" />
				</div>
			</div>
		</div>

		<div class="p-4">
			<h2 class="text-lg font-semibold text-gray-800">{store.name}</h2>
			<p class="text-sm mt-2 text-gray-700">{store.description}</p>
		</div>
	</div>
</a>
