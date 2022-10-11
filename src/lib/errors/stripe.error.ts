import type { StripeError } from '@stripe/stripe-js';

export class StripeErrorInstance extends Error {
	constructor(public params: StripeError) {
		super(params.message);
        this.name = params.type
	
        Object.setPrototypeOf(this, StripeErrorInstance.prototype);
    }
}

// /* Not currently being implemented */
// export class CommerceJSPaymentError extends Error {

// }
