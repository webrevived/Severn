import type { Cart } from '@chec/commerce.js/types/cart';
import type { CheckoutCaptureResponse } from '@chec/commerce.js/types/checkout-capture-response';
import type { CheckoutToken } from '@chec/commerce.js/types/checkout-token';
import type { Price } from '@chec/commerce.js/types/price';
import { writable } from 'svelte/store';

export type CheckoutWithPrice = CheckoutToken & {
	tax: { amount: Price; included_in_price: boolean };
	total: Price;
	total_due: Price;
	total_with_tax: Price;
};

export interface CheckoutCustomer {
	firstName: string;
	lastName: string;
	email: string;
	shippingAddress: {
		street: string;
		city: string;
		zip: string;
		state: string;
	};
	shippingMethod: string;
}

interface CheckoutStore {
	cart: Cart;
	customer: CheckoutCustomer;
	checkout: CheckoutWithPrice;
}

export const checkoutStore = writable<CheckoutStore | undefined>();
