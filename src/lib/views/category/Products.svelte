<script lang="ts">
	import Item from '$lib/global/ItemCard.svelte';
	import type { Product } from '@chec/commerce.js/types/product';

	/* TODO: Add option to show more products & limit visible products */
	export let products: Product[];
</script>

<main class="x-container flex flex-col gap-7.5 py-17.5">
	<div class="flex flex-wrap mt-7.5 gap-13">
		{#each products as product}
			<Item
				href="/products/{product.permalink}"
				src={product.image?.url}
				category={'3 Wick'}
				title={product.name}
				price={product.price.raw}
			/>
		{/each}
	</div>
</main>
