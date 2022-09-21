<script lang="ts" context="module">
	export const load: Load = async ({ params }) => {
		const categorySlug: string = params.slug;
		const category = await dataAccess.products.getCategoryBySlug(categorySlug);

		if (!category)
			return {
				error: new Error('Sorry, this category does not exist.'),
				status: 404
			};

		return {
			props: {
				categorySlug,
				category
			}
		};
	};
</script>

<script lang="ts">
	import commerece from '$lib/data-access/index';
	import Header from '$lib/category/Header.svelte';
	import Products from '$lib/category/Products.svelte';
	import type { Product } from '@chec/commerce.js/types/product';
	import type { Load } from '@sveltejs/kit';
	import type { CategoryWithAssets } from '$lib/stores/collection.store';
	import dataAccess from '$lib/data-access/index';
	import { useQuery } from '@sveltestack/svelte-query';
	import ItemCardSkeleton from '$lib/global/Skeletons/ItemCardSkeleton.svelte';

	export let categorySlug: string;
	export let category: CategoryWithAssets;

	const productsQuery = useQuery(['products', categorySlug], () => {
		return commerece.products.getProductsByCategorySlug(categorySlug);
	});
</script>

<Header
	title={category.name}
	description={category.description}
	thumbnailSrc={category.assets?.[0].url}
/>

{#if $productsQuery.isLoading}
	<div class="x-container flex flex-col gap-7.5 py-17.5">
		<div class="flex flex-wrap mt-7.5 gap-13">
			{#each Array(10) as _}
				<ItemCardSkeleton />
			{/each}
		</div>
	</div>
{:else}
	<Products products={$productsQuery.data.data} />
{/if}
