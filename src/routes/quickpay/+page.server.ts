import type { Quickpay } from '$lib/structure';
import { supabase } from '$lib/supabase';
import type { PostgrestError } from '@supabase/supabase-js';
import type { Action } from '@sveltejs/kit';

// const getData = (formData: FormData) => {
// 	const data: { [key: string]: string } = {};
// 	formData.forEach((value, key) => {
// 		data[key] = value;
// 	});
// 	return data;
// };

export const POST: Action = async ({ request }) => {
	const formData: FormData = await request.formData();
	const amount: string | undefined = formData.get('amount')?.toString();
	const seller_email: string | undefined = formData.get('email')?.toString();
	const seller_phone: string | undefined = formData.get('phone')?.toString();
	const delivery_date: string | undefined = formData.get('duration')?.toString();

	if (!amount || !seller_email || !seller_phone || !delivery_date) {
		return {
			status: 400,
			errors: {
				message: 'all form feild are required'
			}
		};
	}

	const now: Date = new Date();
	const delivery_duration: Date = new Date(delivery_date);

	if (now.getTime() <= delivery_duration.getTime()) {
		return {
			status: 400,
			errors: {
				message: 'you have entered an invalid duration'
			}
		};
	}

	const { error, data } : {error: PostgrestError | null, data: Quickpay | null} = await supabase
		.from('quickpay')
		.insert({ amount, seller_email, seller_phone, delivery_duration });


	if (error) {
		return {
			status: 400,
			errors: {
				message: 'unable to create a quick link, try again'
			}
		};
	}

	return {
		status: 200,
		data: {
			orderLink: data,
			sellerPassword: 'demopassword'
		}
	};
};
