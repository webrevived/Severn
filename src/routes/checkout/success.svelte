<script lang="ts">
	import CheckoutBottomTotal from '$lib/views/checkout/CheckoutBottomTotal.svelte';
	import CheckoutProducts from '$lib/views/checkout/CheckoutProducts.svelte';
	import Button from '$lib/global/Button.svelte';
	import Bar from '$lib/global/Navigation/Bar.svelte';
	import { checkoutStore } from '$lib/stores/checkout-order.store';
	import type { CheckoutWithPrice } from '$lib/stores/checkout-order.store';
	import type { Cart } from '@chec/commerce.js/types/cart';
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
					Thank you {$checkoutStore.customer.firstName}!
				</h4>
				<h2 class="heading-2 text-black-600">Your order is confirmed</h2>
				<p class="mb-5">
					We've accepted your order, and we're getting it ready. A confirmation email has been sent
					to {$checkoutStore.customer.email} Come back to the page for updates on your order status
				</p>
				<Button>Continue Shopping</Button>
			</div>
		</div>

		<div class="grid__order bg-white-300">
			<div class="customer">
				<h1 class="customer__title">Customer Information</h1>

				<div class="customer__data-wrap">
					<div class="customer__data customer__data--address">
						<h3>Shipping Address</h3>
						<p>
							{$checkoutStore.customer.firstName}
							{$checkoutStore.customer.lastName}
						</p>
						<p>{$checkoutStore.customer.shippingAddress.street}</p>
						<p>
							{$checkoutStore.customer.shippingAddress.city}, {$checkoutStore.customer
								.shippingAddress.state}
						</p>
						<p>{$checkoutStore.customer.shippingAddress.zip}</p>
						<!-- <p>407 924 6902</p> -->
					</div>
					<div class="customer__data customer__data--payment">
						<h3>Payment Method</h3>
						<p>Vsia ending with 4242</p>
					</div>

					<div class="customer__data customer__data--shipping">
						<h3>Shipping Method</h3>
						<p>{$checkoutStore.customer.shippingMethod}</p>
					</div>
				</div>
			</div>

			<!-- <hr class=" my-8 text-brown-1200" /> -->

			<div class="details flex flex-col gap-5 mt-10">
				<CheckoutProducts lineItems={$checkoutStore.cart.line_items} />
				<hr />
				<CheckoutBottomTotal
					tax={$checkoutStore.checkout.tax.amount.formatted_with_symbol}
					subtotal={$checkoutStore.checkout.total_due.formatted_with_symbol}
					total={$checkoutStore.checkout.total_due.formatted_with_symbol}
				/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.wrapper {
		height: 100%;
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
