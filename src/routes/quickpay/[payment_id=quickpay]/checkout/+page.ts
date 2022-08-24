import type { Quickpay } from '$lib/structure';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, url }) => {
	const data: Quickpay = await parent();
	if (data.paid) {
		throw redirect(302, url.pathname.replace('checkout', ''));
	}
};
