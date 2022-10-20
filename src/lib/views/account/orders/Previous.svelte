<script lang="ts">
	import EmptyProducts from '$lib/views/account/orders/EmptyProducts.svelte';

	export let pastOrders: any[];
</script>

<section class="x-container mt-20 mb-25">
	<h1 class="heading-2 font-medium text-black-600">Previous Orders</h1>
	<p class="text-1 text-brown-1200 mb-15">The orders that are delivered or refunded</p>

	{#if pastOrders.length == 0}
		<EmptyProducts
			src="/images/candle_sketch.png"
			title="Oops! you don't have any previous orders"
			desc="Search for our products and start adding them to your list"
		/>
	{:else}
		{#each pastOrders as _}
			<!-- <ProductPreview /> -->
		{/each}
	{/if}
</section>
