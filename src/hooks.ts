import type { GetSession, Handle } from '@sveltejs/kit';

const parseCookie = (string: string): any => {
	if (!string) return;
	
	string
		.split(';')
		.map((cookie) => cookie.split('='))
		.reduce((acc, v) => {
			acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
			return acc;
		}, {});
	}

export const handle: Handle = async ({ event, resolve }) => {
	const cookie = event.request.headers.get('cookie');
	const cartId = parseCookie(cookie)?.commercejs_cart_id;

	event.locals.cartId = cartId;

	const response = await resolve(event);
	return response;
};

export const getSession: GetSession = (event) => {
	return event.locals?.cartId ? { cartId: event.locals?.cartId } : {};
};
