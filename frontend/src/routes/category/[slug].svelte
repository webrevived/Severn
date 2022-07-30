<script lang="ts" context="module">
	export const load: Load = ({ params }) => {
		const categorySlug: string = params.slug;

		return {
			props: {
				categorySlug
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
import { categoriesStore, CategoryWithAssets } from '$lib/stores/collection.store';

	export let categorySlug: string;
	let products: Product[] = [];
	
	let catagoryData: CategoryWithAssets;

	const fetchProducts = async () => {
		try {
			const { data: productsResponse, meta } = await commerece.products.getProductsByCategorySlug(
				categorySlug
			);

			if (!productsResponse?.length) return;
			products = productsResponse;
		} catch (error) {
			console.debug(error);
		}
	};

	$: if ($categoriesStore.data?.length) catagoryData = $categoriesStore.data.find((category) => category.slug == categorySlug);
	fetchProducts();
</script>

<Header
	title={categorySlug}
	description="Organize your special event with our high quality premium candles
to make your event memorable."
	thumbnailSrc={catagoryData.assets?.[0].url}
/>

<Products {products} />
