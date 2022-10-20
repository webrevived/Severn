<script lang="ts">
	import ItemCarosel from '$lib/global/ItemCarosel.svelte';
	import { session } from '$app/stores';
	import { shuffleArray } from '$lib/utils';
	import { TransformProductsToItem } from '$lib/api/transforms';
	import type { ProductsApi } from '$lib/api/products';

	const items = shuffleArray($session.products as ProductsApi[])
		.slice(0, 10)
		.map((item) => TransformProductsToItem(item, item.category));

	let options = {
		category: 'Get to know about our Premium Products',
		description: '',
		button: 'Shop All Products',
		href: '/shop',
		items
	};
</script>

<section class="x-container mb-30">
	<ItemCarosel fw="400" {...options} />
</section>
