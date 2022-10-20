<script lang="ts">
	import dataAccess from '$lib/data-access';
	import Button from '$lib/global/Button.svelte';
	import GoBack from '$lib/products/BackButton.svelte';
	import ProductsIcon from '$lib/products/ProductsIcons.svelte';
	import QuantityInput from '$lib/products/QuantityInput.svelte';
	import { navToggles } from '$lib/stores';
	import type { Product } from '@chec/commerce.js/types/product';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import Features from './Features.svelte';
	import MobileProductSlider from './MobileProductSlider.svelte';
	import ProductDetails from './ProductDetails.svelte';

	export let product: Product;

	let quantity = 1;
	let isAddingToCart: boolean = false;

	const queryClient = useQueryClient();

	const addToCart = async () => {
		isAddingToCart = true;

		try {
			const cart = await dataAccess.cart.addToCart({ productId: product.id, quantity });
			/* TODO: Invalide single query */
			await queryClient.invalidateQueries();

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

	/* TODO: Break this componenet up */
</script>

<div class="w-full mt-5 product-areas container">
	<section class="header-container">
		<div class="go-back">
			<GoBack />
		</div>

		<div class="mobile-slider">
			<MobileProductSlider images={product.assets.map((image) => image.url)} />
		</div>

		<div class="image-container">
			{#each product.assets as asset}
				<img class="w-full object-cover" src={asset.url} alt={asset.description} />
			{/each}
		</div>
	</section>

	<section class="product-container pt-12">
		<div class="details">
			<div class="text-black-600 information">
				<h1 class="text-1 text-brown-1200 mb-2">{categoriesToString(product.categories)}</h1>
				<h2 class="heading-1 text-black-600">{product.name}</h2>

				<div class="pb-4 border-b border-black-600 mt-9.5">
					<p class="text-1 text-xl text-black-600">${product.price.raw}</p>
				</div>

				<p class="text-1 text-1.125rem text-grey-600 mt-3 leading-[1.75rem]">
					{@html product.description ?? "This item doesn't seem to have a description"}
				</p>

				<div class="flex gap-10 mt-12.5 justify-between <sm:gap-5">
					<ProductsIcon src="/icons/GiftPack.svg">free gift</ProductsIcon>
					<ProductsIcon src="/icons/HighQuality.svg">high quality</ProductsIcon>
					<ProductsIcon src="/icons/FastShipping.svg">fast shipping</ProductsIcon>
					<ProductsIcon src="/icons/Support.svg">USA support</ProductsIcon>
				</div>
			</div>

			<form class="buying-area" on:submit|preventDefault>
				<QuantityInput on:quantityInc={() => quantity++} on:quantityDec={() => quantity--} />
				<Button minWidth="0px" on:click={addToCart} isLoading={isAddingToCart} width="100%"
					>Add to Cart
				</Button>
			</form>
		</div>
	</section>
</div>

<!-- <div class="m-auto pt-10 pb-20 px-4">
	<Features {product} />
</div> -->
<style lang="scss">
	.details {
		position: sticky;
		top: 2rem;
		height: min-content;
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

	.mobile-slider {
		display: none;
	}

	.container {
		max-width: 1200px;
		padding: 2rem 0;
		margin: 0 auto;
	}

	.header-container,
	.product-container {
		padding: 0 1rem;
	}
	.product-container {
		padding-top: 3rem;
	}
	.header-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.buying-area {
		display: flex;
		justify-items: center;
		align-items: center;
		gap: 1rem;
	}

	@media only screen and (max-width: 1024px) {
		.header-container {
			padding-right: 0rem;
		}

		.image-container {
			img {
				display: block;
				width: 100%;
				height: 100%;
				max-height: 400px;
				max-width: 450px;
			}
		}

		.product-areas {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media only screen and (max-width: 780px) {
		.product-areas {
			gap: 1rem;
		}

		.image-container {
			img {
				min-height: 250px;
				min-width: 250px;
			}
		}
	}

	@media only screen and (max-width: 720px) {
		.mobile-slider {
			display: block;
		}

		.header-container {
			padding-right: 0rem;
		}

		.image-container {
			display: none;
		}

		.product-areas {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
		}
	}

	@media only screen and (max-width: 475px) {
		.header-container {
			padding-left: 0;
			padding-right: 0;
		}
		.product-container {
			padding: 1rem;
		}
	}
</style>
