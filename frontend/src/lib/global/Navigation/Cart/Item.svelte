<script lang="ts">
	import { HOST } from '$lib/api/index';
	import { cartItems } from '$lib/stores';
	import QuantityInput from '$lib/products/QuantityInput.svelte';
	import type { ProductsApi } from '$lib/api/products';
	import type { LineItem } from '@chec/commerce.js/types/line-item';
	import dataAccess from '$lib/data-access';
	import { createEventDispatcher } from 'svelte';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import type { Cart } from '@chec/commerce.js/types/cart';

	export let item: LineItem;
	let isRemovingItem: boolean = false;

	const dispatch = createEventDispatcher();

	const remove = async () => {
		try {
			isRemovingItem = true;
			const removeResponse = await dataAccess.cart.removeFromCart(item.id);
			await useQueryClient().invalidateQueries<Cart>('cart');

			console.debug(`[CART] - Removed item ${item.id} from cart`, removeResponse);
		} catch (error) {
			console.error('[CART] - Failed to remove item from cart', error);
		} finally {
			isRemovingItem = false;
		}
	};
</script>

<div
	class="min-h-30 item-layout items-center"
	class:isRemovingItem
	grid="~ cols-[120px_auto] rows-[auto_auto_auto] gap-x-7.5"
>
	<img class="img" src={item.image.url} alt={item.image.description || item.name} />

	<div class="info flex justify-between items-center text-2 text-brown-1200">
		<h1 class="title heading-2 text-lg">{item.name}</h1>
		<p class="text-0.875rem">$ {(item.price.raw * item.quantity).toFixed(2)}</p>
	</div>

	<h5>Candel</h5>

	<div class="controls flex gap-7.5">
		<QuantityInput quantity={item.quantity} />
		<button class="text-2 text-0.875rem text-brown-900" on:click={remove}>Remove</button>
	</div>
</div>

<style>
	.isRemovingItem {
		pointer-events: none;
		opacity: 0.3;
	}
	.img {
		grid-area: img;
		width: 120px;
		height: 136px;
		object-fit: cover;
	}
	.info {
		grid-area: info;
	}
	.title {
		grid-area: title;
	}
	.controls {
		grid-area: controls;
	}

	.item-layout {
		grid-template-areas:
			'img info'
			'img title'
			'img controls';
	}
</style>
