import type { Item, Store } from '$lib/structure';
import { supabase } from '$lib/supabase';
import { error, redirect } from '@sveltejs/kit';
import type { Action, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, parent }) => {
	const { store }: { store: Store } = await parent();
	if (!locals?.user) {
		throw redirect(302, '/login');
	}
	if (locals.user.id !== store.seller.id) {
		throw error(403, "you can't perform such action on this store");
	}
};

export const POST: Action = async ({ request, url }) => {
	const formData = await request.formData();
	const name: string | undefined = formData.get('name')?.toString();
	const description: string | undefined = formData.get('description')?.toString();
	const delivery_duration: string | undefined = formData.get('delivery_duration')?.toString();
	const available: string | undefined = formData.get('available')?.toString();

	if (!name || !delivery_duration || !description || !available) {
		return {
			status: 400,
			errors: {
				message: 'all feild are required'
			}
		};
	}

	const { error: createError, data } = await supabase.from('items').insert({
		name,
		description,
		delivery_duration,
		available,
		store_id: 'd5cb5f1c-3bdb-4f2f-9325-a7d7d5e8d24a'
	});
	if (createError) {
		return {
			status: 400,
			errors: {
				message: createError.message
			}
		};
	}

	const item: Item = data[0];

	return {
		location: new URL(
			url.pathname.toLowerCase().replace('add-item', '').concat(`${item.id}`),
			url.origin
		).href
	};
};
