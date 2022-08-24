<script lang="ts">
	import { setContext } from 'svelte';

	import { writable, type Writable } from 'svelte/store';

	const errors: Writable<{ message?: string }> = writable({});
	setContext('errors', errors);
</script>

<div class="h-screen w-full flex justify-center align-middle place-items-center">
	<form
		action=""
		method="post"
		class="max-w-sm w-full flex flex-col p-2 shadow-md shadow-gray-300 rounded-md relative"
	>
		{#if $errors?.message}
			<p
				class="absolute left-0 right-0 top-0 bg-orange-400 p-1 text-center rounded-md -translate-y-[110%] text-white"
				on:click={() => {
					$errors = {};
				}}
			>
				{$errors.message}
			</p>
		{/if}
		<slot />
	</form>
</div>
