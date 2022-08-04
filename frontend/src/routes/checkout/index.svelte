<script context="module" lang="ts">
	import commerce from '$lib/data-access/commerce';
	import type { Load } from '@sveltejs/kit';

	type CheckoutWithPrice = CheckoutToken & {
		tax: { amount: Price; included_in_price: boolean };
		total: Price;
		total_due: Price;
		total_with_tax: Price;
	};

	export const load: Load = async ({ session }) => {
		const cart = await commerce.cart.retrieve(session.cartId);
		const checkout = (await commerce.checkout.generateToken(cart.id, {
			type: 'cart'
		})) as CheckoutWithPrice;

		return {
			props: {
				cart,
				checkout
			}
		};
	};
</script>

<script lang="ts">
	import CheckoutBottomTotal from '$lib/checkout/CheckoutBottomTotal.svelte';
	import CheckoutProducts from '$lib/checkout/CheckoutProducts.svelte';
	import CheckoutShippingAddress from '$lib/checkout/CheckoutShippingAddress.svelte';
	import CheckoutShippingMethod from '$lib/checkout/CheckoutShippingMethod.svelte';
	import ContactInformation from '$lib/checkout/ContactInformation.svelte';
	import dataAccess from '$lib/data-access';
	import Button from '$lib/global/Button.svelte';
	import type { Cart } from '@chec/commerce.js/types/cart';
	import type { CheckoutToken } from '@chec/commerce.js/types/checkout-token';
	import type { Price } from '@chec/commerce.js/types/price';
	import { useQuery } from '@sveltestack/svelte-query';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import * as zod from 'zod';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	let token: string;
	export let cart: Cart;
	export let checkout: CheckoutWithPrice;

	// const cartQuery = useQuery('cart', async () => {
	// 	return dataAccess.cart.getCart();
	// });

	/* 	const getCheckoutData = async () => {
		const cart = await dataAccess.cart.getCart();
		const checkout = (await commerce.checkout.generateToken(cart.id, {
			type: 'cart'
		})) as CheckoutWithPrice;

		return { cart, checkout };
	}; */

	// const checkoutQuery = useQuery('checkout', getCheckoutData, { staleTime: 30 * 1000 });

	const schema = zod.object({
		email: zod.string().email('Must be a valid email. example@gmail.com'),
		first_name: zod.string().min(1, 'First name is required'),
		last_name: zod.string().min(1, 'Last name is required'),
		street: zod.string().min(1, 'Street is required'),
		street_2: zod.string().optional(),
		city: zod.string().min(1, 'City is required'),
		state: zod.string().min(1, 'State is required'),
		zip: zod.string().min(1, 'Zip is required'),
		country: zod.string().default('US')
	});

	const { form, errors, data, isSubmitting } = createForm<zod.infer<typeof schema>>({
		extend: validator({ schema }),
		onSubmit: async (values) => {
			console.log(values);
			// const response = await captureCheckout();
			// console.log(response);
		},
		onError: async (error) => {
			console.log('Form submit error', error);
		},
		onSuccess: () => {
			console.log('Form sucess');
		}
	});

	/* 	const captureCheckout = async () => {
		if (!$checkoutQuery.isSuccess) return;

		const capture = await commerce.checkout.capture($checkoutQuery.data.checkout.id, {
			customer: {
				email: $data.email,
				firstname: $data.first_name,
				lastname: $data.last_name
			},
			shipping: {
				country: 'US',
				county_state: 'FL',
				street: $data.street,
				street_2: $data.street_2,
				name: `${$data.first_name} ${$data.last_name}`,
				town_city: $data.city,
				postal_zip_code: $data.zip
			},
			fulfillment: {
				shipping_method: 'ship_8XO3wpNNN5YAzQ'
			},
			payment: {
				gateway: 'test_gateway',
				card: {
					number: '4242 4242 4242 4242',
					expiry_month: '01',
					expiry_year: '2023',
					cvc: '123',
					postal_zip_code: '94103'
				}
			}
		});

		return capture;
	}; */
</script>

<!-- {#if $checkoutQuery.isLoading}
	<h2>Loading..</h2>
{:else if $checkoutQuery.isSuccess}
	<main class="checkout max-w-[1200px] m-auto py-20">
		<div class="border-r border-grey-600 px-5">
			<header class="flex justify-center w-full mb-10">
				<h2 class="text-3xl heading-2 font-semibold flex items-start">
					Saven
					<span class="text-xl"> ®</span>
				</h2>
			</header>

			<form use:form method="post" class="flex flex-col gap-10">
				<ContactInformation {errors} />
				<CheckoutShippingAddress {errors} />
				<CheckoutShippingMethod shippingMethods={$checkoutQuery.data.checkout.shipping_methods} />
				<Button isLoading={$isSubmitting}>Place Order</Button>
			</form>
		</div>

		<div class="details px-5 flex flex-col gap-5">
			<CheckoutProducts lineItems={$checkoutQuery.data.cart.line_items} />
			<hr />
			<CheckoutBottomTotal
				tax={$checkoutQuery.data.checkout.tax.amount.formatted_with_symbol}
				subtotal={$checkoutQuery.data.checkout.total_due.formatted_with_symbol}
				total={$checkoutQuery.data.checkout.total_due.formatted_with_symbol}
			/>
		</div>
	</main>
{:else if $checkoutQuery.isError}
	<h4>Error...</h4>
{/if} -->
<style lang="scss">
	// .checkout {
	// 	position: relative;
	// 	display: grid;
	// 	grid-template-columns: 1fr 0.9fr;
	// }
	// .details {
	// 	height: min-content;
	// 	position: sticky;
	// 	top: 1rem;
	// }
</style>
