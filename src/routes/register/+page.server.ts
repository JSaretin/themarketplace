import { supabase } from '$lib/supabase';
import { error, redirect } from '@sveltejs/kit';

import type { Action } from './$types';

export const POST: Action = async ({ request }) => {
	const formData = await request.formData();
	const isClient = formData.get('is client')?.toString();

	const email: string | undefined = formData.get('email')?.toString();
	const name: string | undefined = formData.get('name')?.toString();
	const password: string | undefined = formData.get('password')?.toString();
	const confirmPassword: string | undefined = formData.get('confirm password')?.toString();

	if (!name || !email || !password || !confirmPassword) {
		return { status: 400, errors: { message: 'all feild are required' } };
	}

	if (password !== confirmPassword) {
		return { status: 400, errors: { message: 'password did not match' } };
	}

	const { error: createError, user: createdAccount } = await supabase.auth.signUp(
		{ email, password },
		{ data: { name } }
	);

	if (createError) {
		return { status: 400, errors: { message: createError.message } };
	}

	await supabase
		.from('users')
		.insert({ id: createdAccount?.id, name })
		.neq('user_id', createdAccount?.id);

	if (!isClient) {
		const storeName: string | undefined = formData.get('store name')?.toString();
		const storeUsername: string | undefined = formData.get('store username')?.toString();
		const storeDescription: string | undefined = formData.get('store description')?.toString();

		if (!storeName || !storeUsername || !storeDescription) {
			return { status: 400, errors: { message: 'all form feild are required' } };
		}

		const { error: storeError } = await supabase.from('stores').insert({
			name: storeName,
			username: storeUsername,
			description: storeDescription,
			seller_id: createdAccount?.id
		});

		if (storeError) {
			return { status: 400, errors: { message: storeError.message } };
		}
	}

	return { location: '/welcome' };
};
