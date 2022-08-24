import type { Item, Store } from '$lib/structure';
import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { store }: { store: Store } = await parent();
	const { error: queryError, data } = await supabase
		.from('items')
		.select("*, comments:item_comments(*)")
		.eq('store_id', store.id)
		.eq('id', params.item_id);

	if (queryError) {
		return {
			status: 500,
			errors: {
				message: queryError.message
			}
		};
	}
	if (data.length === 0) {
		throw error(404, 'item not found');
	}

	const item: Item = data[0];
	return { item };
};



// export const load: PageLoad = async ({ params, parent }) => {
// 	const { store }: { store: Store } = await parent();
// 	const items: Item[] = store.items.filter((i: Item) => i.id == params.item_id);

// 	if (items.length === 0) {
// 		throw error(404, 'item not found');
// 	}

// 	// const item: Item = data[0];
// 	return { item: items[0] };
// };
