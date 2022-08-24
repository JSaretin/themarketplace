<script lang="ts">
	import { page } from '$app/stores';

	import type { Quickpay } from '$lib/structure';
	export let data: Quickpay;

	const expireOn = new Date(data.delivery_duration);
	let timer: string;

	const updateCountDown = () => {
		const now = new Date();
		const diff = expireOn.getTime() - now.getTime();

		const days = 1000 * 60 * 60 * 24;
		const hours = 1000 * 60 * 60;
		const minutes = 1000 * 60;
		const seconds = 1000;

		const split = (value: number | undefined = undefined) => {
			if (!value) {
				return Math.floor(diff / days);
			}
			return Math.floor((diff % days) / value);
		};

		return `${split()} : ${split(hours)} : ${split(minutes)} : ${split(seconds)}`;
	};

	timer = updateCountDown();
	setInterval(() => {
		timer = updateCountDown();
	}, 1000);

	let startCheckout: boolean;
</script>

{#if startCheckout}
	<div class="fixed inset-0 bg-white flex justify-center align-middle place-items-center">
		<div class="max-w-md w-full bg-gray-200 p-4 rounded-sm">
			<p class="text-gray-600">
				if you are the buyer, so start the checkout process, provide your email and phone number,
				this is where we will send code to confirm your order, or to withdraw your fund incase the
				seller do not deliver on {expireOn.toLocaleDateString()}
			</p>

			<form action="" method="post" class="flex flex-col p-4 w-full gap-4">
				<label class="flex flex-col gap-2">
					email
					<input
						type="email"
						name="email"
						class="bg-gray-100 p-2 outline-none border-none"
						required
					/>
				</label>
				<label class="flex flex-col gap-2">
					phone
					<input
						type="tel"
						name="phone"
						class="bg-gray-100 p-2 outline-none border-none"
						required
					/>
				</label>
				<button type="submit">continue checkout</button>
			</form>
		</div>
	</div>
{/if}

<div class="p-4">
	<h2>{data.id}</h2>
	<ul>
		<li>delivery estimation date <span>{data.delivery_duration}</span></li>
		<li>payment status <span>{data.paid ? 'awaiting payment' : 'paid'}</span></li>
		<li>goods shipped <span>{data.has_shipped}</span></li>
		<li>goods received <span>{data.has_received}</span></li>
		<li>expire on <span>{timer}</span></li>
	</ul>

	{#if !data.paid}
		{#if !data.buyer_email || !data.buyer_phone}
			the item will be shipped and release by the seller once we have the payment in out custody
			<button
				class="bg-green-600 py-1 px-4 rounded-sm text-white"
				on:click={() => {
					startCheckout = true;
				}}>check out</button
			>
		{:else}
			seller will be inform to continue with the item shipment once you
			<a
				href={new URL($page.url.pathname.concat('/checkout'), $page.url.origin).href}
				class="bg-green-600 py-1 px-4 rounded-sm text-white">complete the checkout proccess</a
			>
		{/if}
	{/if}
</div>
