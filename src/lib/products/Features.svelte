<script lang="ts">
	import Tabs from '$lib/products/Tabs.svelte';
	import type { Product } from '@chec/commerce.js/types/product';
	import ProductDetails from './ProductDetails.svelte';
	import WhyUs from './WhyUs.svelte';

	export let product: Product;

	let topic = '';
	const options = [
		{ title: 'Product Details', component: ProductDetails },
		// { title: 'Product Gallery', component: ProductGallery },
		{ title: 'Why Us', component: WhyUs }
	];
</script>

<section class="flex flex-col">
	<div class="w-full max-w-182 place-self-center">
		<Tabs bind:value={topic} options={options.map((val) => val.title)} />

		{#each options as option}
			{#if option.title === topic}
				<svelte:component this={option.component} {product} />
			{/if}
		{/each}
	</div>
</section>
