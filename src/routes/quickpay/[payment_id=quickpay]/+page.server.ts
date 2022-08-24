import type { Action } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export const POST: Action = async ({ request, url, params }) => {
	const formData = await request.formData();
	const buyer_email: string | undefined = formData.get('email')?.toString();
	const buyer_phone: string | undefined = formData.get('phone')?.toString();
	if (!buyer_email || !buyer_phone) {
		throw error(400, 'email and phone number required');
	}
	const { error: queryError } = await supabase
		.from('quickpay')
		.update({ buyer_email, buyer_phone })
		.eq('id', params.payment_id);
	if (queryError) {
		throw error(400, 'unable to update info');
	}
	return redirect(302, new URL(url.pathname.concat('/checkout'), url.origin).href);
};
