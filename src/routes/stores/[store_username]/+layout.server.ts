import type { Store } from '$lib/structure';
import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const { error: queryError, data } = await supabase
		.from('stores')
		.select('*, items(*)')
		.eq('username', params.store_username);
	if (queryError || data.length === 0) {
		throw error(404, 'store not found');
	}

	const store: Store = data[0];
	return { store };
};
