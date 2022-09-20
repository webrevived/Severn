import type { RequestHandler } from '@sveltejs/kit';
import { Stripe } from 'stripe';

const stripe = new Stripe(
	'sk_test_51IcuFiCSxYE2vN3err26Kor4IPtWZtgMbW96SVO197CFeljKMO9dniYqQuR6PZmwC02aJRtOijdUXbGsaNtHcjLB00oB7E0yqx',
	{ apiVersion: '2022-08-01' }
);

const calculateOrderAmount = (items) => {
	return 1400;
};

export let POST: RequestHandler<any, any> = async ({ request }) => {
	const body = await request.json();

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculateOrderAmount(undefined),
		currency: 'usd',
		automatic_payment_methods: {
			enabled: true
		}
	});

	return {
		body: {
			clientSecret: paymentIntent.client_secret
		}
	};
};
