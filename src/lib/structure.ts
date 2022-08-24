export interface Quickpay {
	id: string;

	amount: number;
	seller_email: string;
	seller_phone: string;
	delivery_duration: string;

	paid: boolean;
	has_shipped: boolean;
	has_received: boolean;

	buyer_email?: string;
	buyer_phone?: string;

	created_at: string;
	updated_at: string;
}

export interface Cart {
	id: number;
	item: Item;
	quantity: number;
	buy_later: boolean;
}

export interface User {
	id: string;
	email?: string;
	name: string;
	about_me?: string;
	cart: Cart[];
}

export interface ItemComment {
	id: number;
	item: Item;
	comment: string;
	order: Order;
	rating: number;
	poster: User;
	created_at: string;
	expire_on: string;
}

export interface Order {
	id: string;
	item: Item;
	buyer: User;
	paid: boolean;
	has_shipped: boolean;
	has_received: boolean;
	created_at: string;
	expire_on: string;
}

export interface Item {
	id: number;
	name: string;
	description: string;
	available: number;
	store_id: string;
	delivery_duration: string;
	preview: string;
	metadata: { [key: string]: string }[];
	created_at: string;
	updated_at: string;
}

export interface Store {
	id: string;
	name: string;
	username: string;
	seller_id: string;
	description: string;
	restricted: boolean;
	preview: string;
	banner: string;
	items: Item[];
	created_at: string;
	updated_at: string;
}
