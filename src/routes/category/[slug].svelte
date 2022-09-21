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
	import { default as commerece, default as dataAccess } from '$lib/data-access/index';
	import ItemCardSkeleton from '$lib/global/Skeletons/ItemCardSkeleton.svelte';
	import type { CategoryWithAssets } from '$lib/stores/collection.store';
	import Header from '$lib/views/category/Header.svelte';
	import Products from '$lib/views/category/Products.svelte';
	import type { Load } from '@sveltejs/kit';
	import { useQuery } from '@sveltestack/svelte-query';

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
	<div class="products">
		<Products products={$productsQuery.data.data} />
	</div>
{/if}

<style lang="scss">

</style>
