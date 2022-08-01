<script lang="ts">
	import dataAccess from '$lib/data-access';
	import Button from '$lib/global/Button.svelte';
	import GoBack from '$lib/products/BackButton.svelte';
	import ProductsIcon from '$lib/products/ProductsIcons.svelte';
	import QuantityInput from '$lib/products/QuantityInput.svelte';
	import { navToggles } from '$lib/stores';
	import type { Product } from '@chec/commerce.js/types/product';
	import { useQueryClient } from '@sveltestack/svelte-query';

	export let product: Product;
	const discount = 50;

	let quantity = 1;
	let isAddingToCart: boolean = false;

	// discount value - (change this to some var from strapi at some point)
	$: freeShippingAmount = Math.floor(discount - product.price.raw);

	const addToCart = async () => {
		isAddingToCart = true;
		try {
			const cart = await dataAccess.cart.addToCart({ productId: product.id, quantity });
			await useQueryClient().invalidateQueries('cart');

			$navToggles.cart = true;
			console.debug(`[CART] - Added item ${product.id} to cart`, cart);
		} catch (error) {
			console.error('[CART] - Failed to add item to cart', error);
		} finally {
			isAddingToCart = false;
		}
	};

	const categoriesToString = (
		categories: Array<{
			id: string;
			slug: string;
			name: string;
		}>
	) => {
		return categories.map((category) => category.name).join(', ');
	};
</script>

<section class="x-container pt-10 lg:(px-40 py-25)">
	<GoBack />

	<div class="w-full mt-5 product-areas">
		<div class="image-container">
			{#each product.assets as asset}
				<img class="w-full h-250px lg:h-478px img-1 object-cover" src={asset.url} alt="" />
			{/each}
		</div>

		<div class="details">
			<div class="text-black-600 information">
				<h1 class="text-1 text-brown-1200">{categoriesToString(product.categories)}</h1>
				<h2 class="heading-1 text-black-600">{product.name}</h2>

				<div class="pb-4 border-b border-black-600 mt-9.5">
					<p class="text-1 text-xl text-black-600">${product.price.raw}</p>
				</div>

				<p class="text-1 text-1.125rem text-grey-600 mt-3 leading-[1.75rem]">
					{@html product.description ?? "This item doesn't seem to have a description"}
				</p>

				<div class="flex -lg:flex-wrap gap-17.5 mt-12.5">
					<ProductsIcon src="/icons/GiftPack.svg">free gift pack</ProductsIcon>
					<ProductsIcon src="/icons/HighQuality.svg">high quality</ProductsIcon>
					<ProductsIcon src="/icons/FastShipping.svg">fast shipping</ProductsIcon>
					<ProductsIcon src="/icons/Support.svg">24/7 support</ProductsIcon>
				</div>
			</div>

			<form class="buying-area" on:submit|preventDefault>
				<!-- <p class="text-2 text-black-600 mb-2.5">No of Quantity</p>
				<RadioContainer bind:value={_sets} let:key>
					<RadioItem value="1" {key} checked>Set of 1</RadioItem>
					<RadioItem value="2" {key}>Set of 2</RadioItem>
					<RadioItem value="4" {key}>Set of 4</RadioItem>
					<RadioItem value="8" {key}>Set of 8</RadioItem>
				</RadioContainer>

				<p class="text-2 text-black-600 mt-8 mb-2.5">Free Gift Pack Envelope Color</p>
				<RadioContainer bind:value={colors} let:key>
					<RadioItem value={'none'} {key} checked>None</RadioItem>
					<RadioItem value={'pink'} {key}>Pink</RadioItem>
					<RadioItem value={'red'} {key}>Red</RadioItem>
					<RadioItem value={'black'} {key}>Black</RadioItem>
				</RadioContainer> -->

				<div class="w-full flex items-center mt-12">
					<div class="mr-5">
						<QuantityInput on:quantityInc={() => quantity++} on:quantityDec={() => quantity--} />
					</div>
					<div class="w-full grid">
						<Button on:click={addToCart} arrow={!isAddingToCart}>
							{#if !isAddingToCart}
								Add to Cart
							{:else}
								Loading...
							{/if}
						</Button>
					</div>
				</div>

				<!-- change calculation to total price in cart and not just product price -->
				{#if freeShippingAmount > 0}
					<div class="w-full mt-8 pb-4" border="b-1px black-600">
						<p class="heading-3 text-lg text-center">
							You are ${freeShippingAmount} away from free shipping
						</p>
					</div>
				{/if}
			</form>
		</div>
	</div>
</section>

<style lang="scss">
	.details {
		position: sticky;
		top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.image-container {
		gap: 3rem;
		display: grid;
		grid-template-columns: auto;
	}

	.product-areas {
		display: grid;
		grid-template-columns: minmax(400px, 1fr) 1fr;
		gap: 2rem;
	}

	@media only screen and (max-width: 1024px) {
		.image-container {
			height: 400px;

			img {
				height: 400px
			}
		}
		.product-areas {
			grid-template-columns: 1fr;
		}
	}
</style>
