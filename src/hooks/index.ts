import type { Handle } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import { parse, serialize } from 'cookie';
import type { User } from '$lib/structure';

const deleteTokenCookie = (response: Response): Response => {
	const newToken = serialize('token', '', {
		maxAge: 0,
		expires: new Date(0),
		path: '/'
	});
	response.headers.set('Set-Cookie', newToken);
	return response;
};

export const handle: Handle = async ({ event, resolve }) => {
	const cookie = parse(event.request.headers.get('cookie') || '');
	const token: string | undefined = cookie?.token;

	if (event.url.pathname.startsWith('/logout')) {
		const response = await resolve(event);
		const newResponse = deleteTokenCookie(
			new Response(response.body, {
				status: 302,
				headers: { ...response.headers, location: '/' }
			})
		);

		return newResponse;
	}

	if (token) {
		const { error: queryError, data } = await supabase.auth.api.getUser(token);
		if (queryError || !data) {
			const response = await resolve(event);
			return deleteTokenCookie(response);
		}

		const { data: result } = await supabase
			.from('users')
			.select('*, cart:carts(*, item:items(*))');
		if (!result || result.length === 0) {
			const response = await resolve(event);
			return deleteTokenCookie(response);
		}
		const user: User = result[0];
		event.locals['user'] = user;
	}

	return await resolve(event);
};
