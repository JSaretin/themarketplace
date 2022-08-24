import type { Store } from '$lib/structure';
import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { error: queryError, data } = await supabase.from('stores').select();
	if (queryError) throw error(500, 'something went wrong');
	const stores: Store[] = data;
	return {
		stores
	};
};
