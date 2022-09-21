<script context="module" lang="ts">
	import commerce from '$lib/data-access/commerce';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		const cart = await commerce.cart.retrieve(session.cartId);
		let checkout: CheckoutWithPrice;
		try {
			checkout = (await commerce.checkout.generateToken(cart.id, {
				type: 'cart'
			})) as CheckoutWithPrice;
		} catch (error) {
			return {
				error: new Error("You can't checkout yet silly, your cart is empty... :("),
				status: 442
			};
		}

		return {
			props: {
				cart,
				checkout
			}
		};
	};
</script>

<script lang="ts">
	import CheckoutBottomTotal from '$lib/views/checkout/CheckoutBottomTotal.svelte';
	import CheckoutProducts from '$lib/views/checkout/CheckoutProducts.svelte';
	import CheckoutShippingAddress from '$lib/views/checkout/CheckoutShippingAddress.svelte';
	import CheckoutShippingMethod from '$lib/views/checkout/CheckoutShippingMethod.svelte';
	import ContactInformation from '$lib/views/checkout/ContactInformation.svelte';
	import Button from '$lib/global/Button.svelte';
	import ErrorModal from '$lib/global/modal/ErrorModal.svelte';
	import type { CheckoutWithPrice } from '$lib/stores/checkout-order.store';
	import type { Cart } from '@chec/commerce.js/types/cart';
	import { validator } from '@felte/validator-zod';
	import { Appearance, loadStripe, Stripe as StripeType, StripeElements } from '@stripe/stripe-js';
	import { createForm } from 'felte';
	import { onMount } from 'svelte';
	import * as zod from 'zod';

	export let cart: Cart;
	export let checkout: CheckoutWithPrice;

	let errorModal: boolean;

	/** Stripe Card Elements*/
	let elements: StripeElements;
	/** Stripe client secret returned from payment capture*/
	let stripe: StripeType;

	const initalize = async () => {
		const publicApiKey =
			'pk_test_51IcuFiCSxYE2vN3ep4QThULYBVzBfcJcKkYSEJrQSTWyxjxkzTfWDLKm6eZWB47o8U4kWGy2LmsEDYEkgMAcje5H00enMWZzN1';

		const stripeConstructor = await loadStripe(publicApiKey);

		stripe = stripeConstructor;

		const appearance: Appearance = {
			theme: 'stripe'
		};

		elements = stripeConstructor.elements({ appearance });

		const cardNumberElement = elements.create('cardNumber', {
			showIcon: true,
			iconStyle: 'solid',
			style: { base: { fontSize: '16px' } }
		});
		const cardCvcElement = elements.create('cardCvc', { style: { base: { fontSize: '16px' } } });
		const cardExpElement = elements.create('cardExpiry', { style: { base: { fontSize: '16px' } } });

		cardNumberElement.mount('#card-number');
		cardCvcElement.mount('#card-cvc');
		cardExpElement.mount('#card-exp');
	};

	const captureCheckout = async (params: { paymentMethod: string }) => {
		const capture = await commerce.checkout.capture(checkout.id, {
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
				gateway: 'gway_LwjXKQGKrd7r53',
				stripe: {
					payment_method_id: params.paymentMethod
				}
			}
		});

		return capture;
	};

	const handleOrder = async () => {
		const response = await stripe.createPaymentMethod({
			type: 'card',
			card: {
				token: (await stripe.createToken(elements.getElement('cardNumber'))).token.id
			}
		});

		if (response.error) {
			console.error(response.error);
			return;
		}

		try {
			const checkout = await captureCheckout({ paymentMethod: response.paymentMethod.id });

			console.log(checkout);
		} catch (error) {
			console.error(error);
		}
	};

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
		initialValues: {
			city: 'Longwood',
			country: 'US',
			email: 'adam@webrevived.com',
			first_name: 'Adam',
			last_name: 'Ghowiba',
			state: 'Florida',
			street: '1020 Waverly Dr.',
			zip: '32714'
		},
		extend: validator({ schema }),
		onSubmit: async (values) => {
			const response = await handleOrder();

			console.log(response);
		},
		onError: async (error) => {
			console.log('Form submit error', error);
		},
		onSuccess: async (values: zod.infer<typeof schema>, context) => {
			// $checkoutStore = {
			// 	cart,
			// 	checkout,
			// 	customer: {
			// 		email: values.email,
			// 		firstName: values.first_name,
			// 		lastName: values.last_name,
			// 		shippingAddress: {
			// 			city: values.city,
			// 			state: values.state,
			// 			street: values.street,
			// 			zip: values.zip
			// 		},
			// 		shippingMethod: 'Domestic'
			// 	}
			// };
			// goto('/checkout/success');
		}
	});

	onMount(() => {
		initalize();
	});
</script>

<svelte:head>
	<script src="https://js.stripe.com/v3/"></script>
</svelte:head>

<main class="checkout max-w-[1200px] m-auto py-20">
	{#if errorModal}
		<ErrorModal on:close={() => (errorModal = false)} />
	{/if}

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
			<CheckoutShippingMethod shippingMethods={checkout.shipping_methods} />

			<div class="payment">
				<h3 class="heading-3 font-semibold">Payment Information</h3>

				<div class="card-wrapper">
					<div class="card-number-wrap">
						<label for="card-number">Card number</label>
						<div id="card-number">
							<!--Stripe.js injects the Card number here-->
						</div>
					</div>

					<div class="card-column">
						<div class="card-exp-wrap">
							<label for="card-exp">Expiration</label>
							<div id="card-exp">
								<!--Stripe.js injects the card EXP here-->
							</div>
						</div>

						<div class="card-cvc-warp">
							<label for="card-cvc">CVC</label>
							<div id="card-cvc">
								<!--Stripe.js injects the Card cvc here-->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="payment-message" class="hidden" />
			<Button isLoading={$isSubmitting}>Place Order</Button>
		</form>
	</div>

	<div class="details px-5 flex flex-col gap-5">
		<CheckoutProducts lineItems={cart.line_items} />
		<hr />
		<CheckoutBottomTotal
			tax={checkout.tax.amount.formatted_with_symbol}
			subtotal={checkout.total_due.formatted_with_symbol}
			total={checkout.total_due.formatted_with_symbol}
		/>
	</div>
</main>

<style lang="scss">
	.checkout {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 0.9fr;
	}
	.details {
		height: min-content;
		position: sticky;
		top: 1rem;
	}

	.payment {
		display: flex;
		flex-direction: column;
		gap: 1em;

		label {
			display: block;
			color: #30313d;
			padding-bottom: 4px;
			padding-left: 4px;
		}
	}

	#card-number,
	#card-cvc,
	#card-exp {
		padding: 1rem;
		background-color: white;
		border: 1px solid #e6e6e6;
		border-radius: 5px;
	}

	.card-column {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-top: 1rem;
	}
</style>
