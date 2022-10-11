import commerce from './commerce';

export const getCart = async () => {
	const cart = await commerce.cart.retrieve();

	return cart;
};

interface ProductData {
	productId: string;
	quantity?: number;
	variantData?: string | object;
}
export const addToCart = async ({ productId, quantity, variantData }: ProductData) => {
	const cart = await commerce.cart.add(productId, quantity, variantData);

	return cart;
};

export const removeFromCart = async (lineItemId: string) => {
	const cart = await commerce.cart.remove(lineItemId);

	return cart;
};

interface UpdateQuanityParams {
	quanity: number;
}
export const updateItemQuanitty = async (itemId: string, params: UpdateQuanityParams) => {
	const updatedCart = await commerce.cart.update(itemId, { quantity: params.quanity });

	return updatedCart;
};
