<script lang="ts">
	import type { Item } from '$lib/structure';

	export let data: { item: Item };

    interface ItemInfo extends Item {
        commnent: string
    }
	const { item } = data;
</script>

{JSON.stringify(item)}
