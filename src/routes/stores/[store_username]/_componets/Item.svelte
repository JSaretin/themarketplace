<script lang="ts">
	import { page } from '$app/stores';
	import type { Item } from '$lib/structure';

	export let item: Item;

	const path = new URL($page.url.pathname.concat(`/${item.id}`), $page.url.origin).href;

	const createdAt = new Date(item.created_at);
	const deliverAt = new Date(item.delivery_duration);

	// calculate duration between created and delivery to get estimated delivery time
</script>

<a href={path} sveltekit:prefetch>
	<div class="shadow-md shadow-gray-400 rounded-md h-[350px] flex flex-col overflow-hidden">
		<div class="h-full w-full flex-1 overflow-hidden">
			<img
				src={item.preview}
				class="object-cover h-full w-full hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in"
				alt={item.name}
			/>
		</div>
		<div class="p-4">
			<h2>{item.name}</h2>
			<p>{item.description}</p>
			<p>{item.available}</p>
		</div>
		<!-- <div class="flex group-hover:bg-red-400">
			<button class="flex-1 py-1 bg-orange-600 text-white">add to cart</button>
			<button class="flex-1 py-1 bg-green-600 text-white">buy now</button>
		</div> -->
	</div>
</a>
