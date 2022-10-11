interface SuccessQueryParams {
	firstName: string;
	lastName: string;
	email: string;
	street: string;
	state: string;
	city: string;
	zip: string;
	shipping: string;
}

export const encodeSuccessQuery = (params: SuccessQueryParams) => {
	const url = new URLSearchParams();

	url.set('first_name', params.firstName);
	url.set('last_name', params.lastName);
	url.set('email', params.email);
	url.set('street', params.street);
	url.set('state', params.state);
	url.set('city', params.city);
	url.set('zip', params.zip);
	url.set('shipping', params.shipping);

    return url.toString();
};
