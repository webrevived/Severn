<script lang="ts" context="module">
	export let load: Load = ({ url }) => {
		const query = url.searchParams;

		const firstName = query.get('first_name');
		const lastName = query.get('last_name');
		const email = query.get('email');
		const street = query.get('street');
		const state = query.get('state');
		const city = query.get('city');
		const zip = query.get('zip');
		const shipping = query.get('shippinh');

		return {
			props: {
				firstName,
				lastName,
				email,
				street,
				state,
				city,
				zip,
				shipping
			}
		};
	};
</script>

<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import { checkoutStore } from '$lib/stores/checkout-order.store';
	import CheckoutBottomTotal from '$lib/views/checkout/CheckoutBottomTotal.svelte';
	import CheckoutProducts from '$lib/views/checkout/CheckoutProducts.svelte';
	import type { Load } from '@sveltejs/kit';

	export let firstName: string;
	export let lastName: string;
	export let email: string;
	export let street: string;
	export let state: string;
	export let city: string;
	export let zip: string;
	export let shipping: string;
</script>

<section class="wrapper">
	<div class="grid">
		<div class="grid__confirmation">
			<h2 class="logo text-3xl heading-2 font-semibold flex items-start p-6">
				Saven
				<span class="text-xl"> ®</span>
			</h2>

			<div class="confirmation">
				<h4 class="heading-3 text-brown-1200">
					Thank you {firstName}!
				</h4>
				<h2 class="heading-2 text-black-600">Your order is confirmed</h2>
				<p class="mb-5">
					We've accepted your order, and we're getting it ready. A confirmation email has been sent
					to <b>{email}</b> Come back to the page for updates on your order status
				</p>
				<Button href="/shop">Continue Shopping</Button>
			</div>
		</div>

		<div class="grid__order bg-white-300">
			<div class="customer">
				<h1 class="customer__title">Customer Information</h1>

				<div class="customer__data-wrap">
					<div class="customer__data customer__data--address">
						<h3>Shipping Address</h3>
						<p>
							{firstName}
							{lastName}
						</p>
						<p>{street}</p>
						<p>
							{city}, {state}
						</p>
						<p>{zip}</p>
						<!-- <p>407 924 6902</p> -->
					</div>
					<div class="customer__data customer__data--payment">
						<h3>Payment Method</h3>
						<p>Vsia ending with 4242</p>
					</div>

					<div class="customer__data customer__data--shipping">
						<h3>Shipping Method</h3>
						<p>{shipping}</p>
					</div>
				</div>
			</div>

			<!-- <hr class=" my-8 text-brown-1200" /> -->

			<div class="details flex flex-col gap-5 mt-10">
				<!-- <CheckoutProducts lineItems={$checkoutStore.cart.line_items} /> -->
				<hr />
				<!-- <CheckoutBottomTotal
					tax={$checkoutStore.checkout.tax.amount.formatted_with_symbol}
					subtotal={$checkoutStore.checkout.total_due.formatted_with_symbol}
					total={$checkoutStore.checkout.total_due.formatted_with_symbol}
				/> -->
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.wrapper {
		height: 100vh;
	}
	.customer {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		&__title {
			@apply heading-3;
		}

		&__data-wrap {
			display: flex;
			gap: 1.5rem;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		&__data {
			display: flex;
			flex-direction: column;
		}

		&__data h3 {
			margin-bottom: 0.5rem;
			font-weight: 600;
		}
	}
	.grid {
		display: grid;
		height: 100%;
		grid-template-columns: 1.3fr minmax(300px, 1fr);

		&__confirmation {
			position: relative;
			height: 100%;
		}

		&__order {
			position: relative;
			height: 100%;
			padding: 2rem 1.5rem;
		}
	}
	.confirmation {
		position: absolute;
		width: 100%;
		left: 50%;
		top: 50%;
		padding: 0 1rem;
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		flex-direction: column;
		gap: 0.3em;
		max-width: 40ch;
	}

	b {
		font-weight: medium;
	}

	@media only screen and (max-width: 768px) {
		.logo {
			display: none;
		}
		.grid {
			grid-template-columns: 1fr;

			&__confirmation {
				height: 100%;
				min-height: 70vh;
			}
		}
	}
</style>
