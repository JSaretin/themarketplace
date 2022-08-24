<script lang="ts">
	import Client from './_componets/Client.svelte';
	import Store from './_componets/Store.svelte';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	export let errors: { message?: string };
	const errorsStore: Writable<{ message?: string }> = getContext('errors');
	$errorsStore = errors;

	let isClient: boolean = true;

	const defaultToggleCls =
		'flex-1 py-2 flex text-center transition-all duration-200 ease-in-out place-items-center justify-center cursor-pointer border-2 border-gray-600';
</script>

<div class="w-full flex p-2">
	<input
		type="button"
		value="buyer account"
		class={`${defaultToggleCls} ${isClient ? 'bg-gray-600 text-white' : 'bg-white text-gray-600'}`}
		on:click={() => {
			isClient = true;
		}}
	/>
	<input
		type="button"
		value="seller account"
		class={`${defaultToggleCls} ${!isClient ? 'bg-gray-600 text-white' : 'bg-white text-gray-600'}`}
		on:click={() => {
			isClient = false;
		}}
	/>
</div>
<input type="checkbox" name="is client" hidden bind:checked={isClient} />
<div class="w-full flex flex-col p-4 gap-3 ">
	{#if isClient}
		<Client />
	{:else}
		<Store />
	{/if}

	<input
		type="submit"
		value="create account"
		class="bg-blue-600 py-3 mt-4 text-white cursor-pointer"
	/>

	<p class="text-gray-500 text-sm">already have an account? <a href="/login" class="text-blue-500 font-medium hover:text-blue-600" sveltekit:prefetch>login</a></p>
</div>
