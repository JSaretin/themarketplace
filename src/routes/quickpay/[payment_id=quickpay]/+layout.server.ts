import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import type { PageServerLoad } from './$types';
import type { Quickpay } from '$lib/structure';

export const load: PageServerLoad = async ({ params }) => {
	// const { error: queryError, data } = await supabase
	// 	.from('quickpay')
	// 	.select()
	// 	.eq('id', params.payment_id);

	// if (queryError) {
	// 	throw error(404, queryError.message);
	// }
	// const quickpay: Quickpay = data[0];

    const quickpay: Quickpay = {
        id: params.payment_id,
        amount: 200,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        delivery_duration: new Date().toISOString(),
        has_received: false,
        has_shipped: false,
        paid: false,
        seller_email: 'seller@gmail.com',
        seller_phone: '123454',
        buyer_email: 'buyer@gmail.com',
        buyer_phone: '2343422'
    }
	return quickpay;
};
