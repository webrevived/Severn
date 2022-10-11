<script lang="ts">
	import FocusItemCard from '$lib/global/FocusItemCard.svelte';
	import Item from '$lib/global/ItemCard.svelte';
	import type { Product } from '@chec/commerce.js/types/product';

	/* TODO: Add option to show more products & limit visible products */
	export let products: Product[];
</script>

<main class="products-wrap section container flex flex-col gap-7.5">
	<div class="products">
		{#each products as product}
			<FocusItemCard
				price={product.price.raw}
				title={product.name}
				category={'3 Wick'}
				imgSrc={product.image?.url}
				href="/products/{product.permalink}"
			/>

			<!-- <Item
				href="/products/{product.permalink}"
				src={product.image?.url}
				category={'3 Wick'}
				title={product.name}
				price={product.price.raw}
			/> -->
		{/each}
	</div>
</main>

<style lang="scss">
	.products {
		display: grid;
		column-gap: var(--space-md);
		row-gap: var(--space-md);
		grid-template-columns: repeat(3, minmax(300px, 100%));
		grid-auto-rows: 400px;
	}
	
	@media only screen and (max-width: 1024px) {
		.products {
			grid-template-columns: repeat(2, minmax(300px, 100%));
			column-gap: var(--space-sm);
			row-gap: var(--space-sm);
		}
	}
	
	@media only screen and (max-width: 768px) {
		.products {
			grid-template-columns: repeat(2, minmax(200px, 100%));
			grid-auto-rows: 350px;
			column-gap: var(--space-xs);
			row-gap: var(--space-xs);
		}
	}

	@media only screen and (max-width: 425px) {
		.products-wrap {
			padding-left: 0;
			padding-right: 0;
		}
		.products {
			grid-template-columns: repeat(2, minmax(150px, 100%));
			grid-auto-rows: 250px;
			row-gap: var(--space-lg);
		}
	}
</style>
