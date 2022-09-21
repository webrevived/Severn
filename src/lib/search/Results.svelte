<script lang="ts">
	import type { ProductsApi } from '$lib/api/products';
	import { TransformProductsToItem } from '$lib/api/transforms';
	import ItemCard from '$lib/global/ItemCard.svelte';

	export let items: ProductsApi[];
	let _items = items?.map((prod) => TransformProductsToItem(prod, prod.category)) ?? [];
</script>

{#if items?.length > 0}
	<section class="x-container py-26 gap-13.5" flex="~ wrap" justify="center md:start">
		{#each _items as item}
			<ItemCard href="/products/{item.id}" {...item} />
		{/each}
	</section>
{:else}
	<section class="x-container w-full pt-26 pb-101 gap-5" flex="~ col" align="items-center">
		<h1 class="hidden">Not Found</h1>

		<img class="w-max h-max mb-17.5" src="/images/NotFound.png" alt="Not Found" />
		<p class="heading-3 text-black-600">
			Unable to find what you have searched for. Go to the <span font="bold">Our Shop</span> for more
		</p>
		<p class="text-1 text-brown-1200">
			If not maybe double check your spelling or try something else. Our shop have great collection
		</p>
	</section>
{/if}
