import { supabase } from '$lib/supabase';

export function match(param: string) {
	console.log(param);
    let isTrue: boolean;

	supabase.from('stores').select().eq('username', param).then(({error, data})=>{
        isTrue = !error
    })
	// if (error || data.length == 0) return false;
	// return /^(([\d\w]+)-)+([\d\w]+)$/.test(param);
	return;
}
