<script lang="ts">
	export let errors: { message?: string };
</script>

{#if errors?.message}
	<p>{errors.message}</p>
{/if}

<form action="" method="post" class="flex flex-col max-w-md">
	<legend class="w-full bg-gray-600 p-2 text-center text-gray-100 mb-3">Add new product</legend>
	<label class="flex flex-col">
		name
		<input type="text" name="name" class="bg-gray-300 p-1" />
	</label>

	<label class="flex flex-col">
		description
		<textarea name="description" cols="30" rows="10" class="bg-gray-300 p-1" />
	</label>

	<label class="flex flex-col">
		available
		<input type="number" name="available" class="bg-gray-300 p-1" />
	</label>

	<label class="flex flex-col">
		delivery duration
		<input type="datetime-local" name="delivery_duration" class="bg-gray-300 p-1" />
	</label>

	<input type="submit" value="create item" class="p-3 text-white bg-blue-600 mt-4" />
</form>
