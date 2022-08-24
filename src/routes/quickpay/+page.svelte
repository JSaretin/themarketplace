<script lang="ts">
	export let errors: { message?: string };
</script>

{#if errors?.message}
	<span
		on:click={() => {
			errors.message = undefined;
		}}>{errors.message}</span
	>
{/if}

<form action="" method="post" class="flex flex-col max-w-sm">
	<label class="flex flex-col">
		amount
		<input type="number" name="amount" class="border-2" required />
	</label>
	<label class="flex flex-col">
		Duration
		<input type="datetime-local" name="duration" class="border-2" required />
	</label>

	<label class="flex flex-col">
		Email
		<input type="email" name="email" class="border-2" required />
	</label>

	<label class="flex flex-col">
		Phone
		<input type="tel" name="phone" class="border-2" required />
	</label>

	<button type="submit" class="w-full bg-gray-500 py-1 mt-2">get link</button>
</form>
