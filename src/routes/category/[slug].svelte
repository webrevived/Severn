<script lang="ts" context="module">
	export const load: Load = async ({ params, url }) => {
		const categorySlug: string = params.slug;
		const category = await dataAccess.products.getCategoryBySlug(categorySlug, { include: true });
		const subcategory = url.searchParams.get('subcategory');

		if (!category)
			return {
				error: new Error('Sorry, this category does not exist.'),
				status: 404
			};

		return {
			props: {
				categorySlug,
				category,
				subcategory
			}
		};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';

	import { default as commerece, default as dataAccess } from '$lib/data-access/index';
	import ItemCardSkeleton from '$lib/global/Skeletons/ItemCardSkeleton.svelte';
	import type { CategoryWithAssets } from '$lib/stores/collection.store';
	import Header from '$lib/views/category/Header.svelte';
	import Products from '$lib/views/category/Products.svelte';
	import type { Load } from '@sveltejs/kit';
	import { useQuery } from '@sveltestack/svelte-query';

	export let categorySlug: string;
	export let category: CategoryWithAssets;
	export let subcategory: string | undefined;

	$: productsQuery = useQuery(
		['products', [categorySlug, subcategory]],
		() => {
			// subcategory ? [categorySlug, subcategory] : categorySlug
			return commerece.products.getProductsByCategorySlug(
				subcategory ? [subcategory, categorySlug] : categorySlug
			);
		},
		{ staleTime: 1000 * 60 * 60, refetchOnMount: true }
	);

	$: console.log($productsQuery.data);
</script>

<Header
	title={category.name}
	description={category.description}
	thumbnailSrc={category.assets?.[0]?.url}
/>

{#if $productsQuery.isLoading || $productsQuery.isRefetching}
	<div class="x-container flex flex-col gap-7.5 py-17.5">
		<div class="flex flex-wrap mt-7.5 gap-13">
			{#each Array(10) as _}
				<ItemCardSkeleton />
			{/each}
		</div>
	</div>
{:else if $productsQuery.isSuccess}
	<div class="products">
		<Products products={$productsQuery.data.data} />
	</div>
{:else}
	<h5>Error loading category</h5>
{/if}

<style lang="scss">
</style>
