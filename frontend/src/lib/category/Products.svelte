<script lang="ts">
	import type { CategoriesApi } from '$lib/api/categorys';
	import { HOST } from '$lib/api/index';
	import IconHR from '$lib/global/IconHR.svelte';
	import Item from '$lib/global/ItemCard.svelte';
	import ItemCardSkeleton from '$lib/global/Skeletons/ItemCardSkeleton.svelte';
	import type { Product } from '@chec/commerce.js/types/product';

	export let products: Product[];

	let showProducts = 4;
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

	<div class="flex w-full justify-center">
		<!-- {#if showProducts <= category.products.length}
			<button
				class="heading-3 text-black-600 pb-2 border-b-1 w-max hover:(italic font-medium)"
				on:click={() => (showProducts += 4)}
			>
				Load More
			</button>
		{/if} -->
	</div>
</main>
