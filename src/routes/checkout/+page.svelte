<script lang="ts">
	import type { User } from '$lib/structure';

	export let data: { user: User };

	const { user } = data;
</script>

<div class="max-w-md w-full flex flex-col mx-auto">
	{#each user.cart as cartItem, _}
		<div class="flex h-[80px] bg-gray-300 p-1 gap-4 relative overflow-hidden rounded-sm">
			{#if cartItem.item.available < cartItem.quantity}
				<div
					class="absolute inset-0 bg-gray-400 bg-opacity-60 flex justify-center align-middle place-items-center"
				>
					<p class="text-sm text-red-100">item sold out</p>
				</div>
			{/if}
			<img src={cartItem.item.preview} alt="" class="h-full aspect-square object-cover" />
			<div class="flex flex-col">
				<h3>{cartItem.item.name}</h3>
				<h4>{cartItem.quantity} qnt</h4>
			</div>
		</div>
	{/each}

	<form action="" method="post" class="w-full flex justify-end mt-4">
		<input type="submit" value="checkout" class="bg-green-600 text-white py-1 px-4" />
	</form>
</div>
