import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Action } from './$types';

export const POST: Action = async ({ url, request }) => {
	return {
		location: url.searchParams.get('next') || '/profile',
		data: {
			alert: {
				message: 'shpping address added',
				type: 'success'
			}
		}
	};
};
