<script lang="ts">
	import Products from '$lib/views/shop/Products.svelte';
	import dataAccess from '$lib/data-access';
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import Deals from '$lib/views/shop/Deals.svelte';
	import ShopHeader from '$lib/views/shop/ShopHeader.svelte';
	import type { Category } from '@chec/commerce.js/types/category';
	import type { Product } from '@chec/commerce.js/types/product';
	import { useQuery } from '@sveltestack/svelte-query';
	import { categoriesStore } from '$lib/stores/collection.store';
	import CategoryItemsSkeleton from '$lib/global/Skeletons/CategoryItemsSkeleton.svelte';

	interface Collection {
		category: Category;
		products: Product[];
	}

	const fetchProductsByCategory = async (): Promise<Collection[]> => {
		let collection: Collection[] = [];
		let categories: Category[];

		if ($categoriesStore.status === 'sucess') {
			categories = $categoriesStore.data;
		} else {
			categories = (await dataAccess.products.getAllCategories({ depth: 1 })).data;
		}

		await Promise.all(
			categories.map(async (category) => {
				const products = await dataAccess.products.getAllProducts({
					category_slug: category.slug,
					limit: 10,
					sortBy: 'created'
				});

				collection = [...collection, { category, products: products.data }];
			})
		);

		return collection;
	};

	const collectionQuery = useQuery('collections', async () => {
		return fetchProductsByCategory();
	});
</script>

<main>
	<NavBar dark />

	<ShopHeader />

	{#if $collectionQuery.status === 'loading'}
		<section class="w-full x-container flex flex-col gap-10 pb-22">
			<CategoryItemsSkeleton />
			<CategoryItemsSkeleton />
		</section>
	{:else if $collectionQuery.isSuccess}
		{#each $collectionQuery.data as collection (collection.category.name)}
			<Products
				category={{
					button: {
						text: `Shop ${collection.category.name}`,
						href: `/category/${collection.category.slug}`
					},
					category: collection.category.name,
					description: collection.category.description,
					products: collection.products
				}}
			/>
		{/each}
	{/if}

	<Deals />
</main>
