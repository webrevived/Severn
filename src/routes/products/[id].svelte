<!-- TODO: Change to svelte query for caching. -->
<script lang="ts" context="module">
	import { getProduct } from '$lib/data-access/products.api';

	export const load: Load = async ({ params }) => {
		const productPermaLink: string = params.id;

		const product = await getProduct(productPermaLink);

		return {
			props: {
				productPermaLink,
				product
			}
		};
	};
</script>

<script lang="ts">
	import NavBar from '$lib/global/Navigation/Bar.svelte';
	import ProductPurchase from '$lib/products/ProductPurchase.svelte';
	import type { Load } from '@sveltejs/kit';
	import type { Product } from '@chec/commerce.js/types/product';

	export let product: Product;
</script>

<header class="x-container pt-6">
	<NavBar dark />
</header>

<main>
	<ProductPurchase {product} />
</main>
