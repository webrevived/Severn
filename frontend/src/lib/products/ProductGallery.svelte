<script lang="ts">
	import { HOST } from '$lib/api/index';
	import type { ProductsApi } from '$lib/api/products';
	export let product: ProductsApi;
</script>

<div class="mt-14">
	<h1 class="heading-2 font-medium text-black-600 text-center">Made with Love</h1>

	<div class="w-full h-67.5 flex overflow-hidden mt-7.5">
		{#if product.gallery.length > 0}
			{#each product.gallery as image}
				<div class="bg-src" style="--src:{HOST}{image.url}" />
			{/each}
		{:else}
			<h2 class="heading-1 text-black-600 w-full text-center">
				Sorry this Product has no images in it's gallery.
			</h2>
		{/if}
	</div>
</div>

<style>
	.bg-src {
		background: url('/images/ItemFilter.png'), var(--src);
		background-position: center;
	}
</style>
