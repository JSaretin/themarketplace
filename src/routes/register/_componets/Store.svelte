<script>
	import Client from './Client.svelte';
</script>

<Client />
<label class="flex flex-col gap-2">
	store name
	<input type="text" name="store name" class="p-1 bg-gray-400 rounded-md flex" required />
</label>

<label class="flex flex-col gap-2">
	store username
	<input type="text" name="store username" class="p-1 bg-gray-400 rounded-md flex" required />
</label>

<label class="flex flex-col gap-2">
	store description
	<textarea
		name="store description"
		id=""
		cols="30"
		rows="3"
		class="p-1 bg-gray-400 rounded-md flex resize-none"
	/>
</label>
