<script lang="ts">
	import { getContext } from 'svelte';

	import type { Writable } from 'svelte/store';

	export let errors: { message?: string };
	const errorsStore: Writable<{ message?: string }> = getContext('errors');
	$errorsStore = errors;
</script>

<div class="p-2 flex flex-col gap-4">
	<label class="flex flex-col w-full gap-2">
		email
		<input type="email" name="email" autocomplete="username" class="bg-gray-400 rounded-md p-1" />
	</label>

	<label class="flex flex-col w-full gap-2">
		password
		<input
			type="password"
			name="password"
			autocomplete="current-password"
			class="bg-gray-400 rounded-md p-1"
		/>
	</label>

	<input type="submit" value="login" class="bg-blue-600 text-white w-full mt-4 py-2" />

	<p class="text-gray-500 text-sm">
		don't have an account? <a
			href="/register"
			class="text-blue-500 font-medium hover:text-blue-600"
			sveltekit:prefetch>register</a
		>
	</p>
</div>
