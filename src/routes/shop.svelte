<script lang="ts">
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import dataAccess from '$lib/data-access';
	import CategoryItemsSkeleton from '$lib/global/Skeletons/CategoryItemsSkeleton.svelte';
	import Deals from '$lib/views/shop/Deals.svelte';
	import Products from '$lib/views/shop/Products.svelte';
	import ShopHeader from '$lib/views/shop/ShopHeader.svelte';
	import type { Category } from '@chec/commerce.js/types/category';
	import type { Product } from '@chec/commerce.js/types/product';
	import { useQuery } from '@sveltestack/svelte-query';

	interface Collection {
		category: Category;
		products: Product[];
	}

	const categoriesQuery = useQuery('categories', () => {
		return dataAccess.products.getAllCategories({ depth: 1 });
	});

	const fetchProductsByCategory = async (): Promise<Collection[]> => {
		let collection: Collection[] = [];
		let categories: Category[];

		if ($categoriesQuery.isSuccess) {
			categories = $categoriesQuery.data.data;
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
	}, {staleTime: 1000 * 60 * 10});
</script>

<main>
	<NavBar dark />

	<ShopHeader />

	{#if $collectionQuery.status === 'loading'}
		<section class="container flex flex-col gap-10 pb-22">
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
