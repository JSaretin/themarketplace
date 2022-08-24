<script lang="ts">
	import type { User } from '$lib/structure';

	export let user: User | undefined;

	// const getPosition: number = ()=>{
	//     return window.
	// }

	const notScrolled: boolean = false;
</script>

<div class={'h-16 w-full sticky top-0 left-0 ' + notScrolled ? 'bg-transparent' : 'bg-gray-800'}>
	<div
		class="max-w-6xl w-full h-full m-auto p-2 flex align-middle place-items-center justify-between text-gray-800"
	>
		<div class="h-full flex align-middle place-items-center">
			<a href="/" sveltekit:prefetch><h1 class="font-bold text-lg">FairsTrade</h1></a>
		</div>

		<div class="flex">
			<ul class="flex">
				<li><a href="/stores" sveltekit:prefetch>stores</a></li>
			</ul>
		</div>

		<div class="flex align-middle place-items-center h-full gap-4">
			{#if user}
				<a href="/checkout" class="h-full w-full block" sveltekit:prefetch>
                    <div
					class="h-full aspect-square bg-gray-200 rounded-full text-gray-900 flex align-middle place-items-center justify-center font-bold"
				>
					{user.cart.length}

				</div></a>
				<!-- <div class="absolute top-16">
					<ul>
						<li><a href="/profile">profile</a></li>
					</ul>
				</div> -->
				<a href="/logout" class="bg-red-500 px-5 py-1">logout</a>
			{:else}
				<a href="/login" sveltekit:prefetch>login</a>
			{/if}
		</div>
	</div>
</div>
