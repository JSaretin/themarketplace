import type { Action, PageServerLoad } from './$types';
import { serialize } from 'cookie';
import { supabase } from '$lib/supabase';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals?.user) throw redirect(302, '/');
};

export const POST: Action = async ({ request, setHeaders, url }) => {
	const formData = await request.formData();
	const email: string | undefined = formData.get('email')?.toString();
	const password: string | undefined = formData.get('password')?.toString();
	if (!email || !password)
		return {
			status: 400,
			errors: {
				message: 'email and password required'
			}
		};

	const { error, session } = await supabase.auth.signIn({ email, password });
	if (error) {
		return {
			status: 400,
			errors: {
				message: error.message
			}
		};
	}

	const { access_token, refresh_token, expires_at, expires_in } = session!;

	const token = serialize('token', access_token, {
		expires: new Date(expires_in! * 1000),
		maxAge: expires_at,
		path: '/'
	});
	setHeaders({ 'set-cookie': token });
	return {
		location: url.searchParams.get('next') || '/'
	};
};
