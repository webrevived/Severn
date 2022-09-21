<script lang="ts">
	import EmptyProducts from '$lib/views/account/orders/EmptyProducts.svelte';
	import ProductPreview from '$lib/views/account/ProductPreview.svelte';

	export let activeOrders: any[];
</script>

<section class="x-container">
	<h1 class="heading-2 font-medium text-black-600">Active Orders</h1>
	<p class="text-1 text-brown-1200">The orders that are still in progress</p>

	{#if activeOrders.length == 0}
		<EmptyProducts
			src="/images/light_bulb.png"
			title="Oops! you don't have any active orders"
			desc="Search for our products and start adding them to your list"
		/>
	{:else}
		<div class="flex flex-col gap-7 mt-10">
			{#each activeOrders as _}
				<div class="border-1 rounded-lg sm:p-5">
					<ProductPreview />
				</div>
			{/each}
		</div>
	{/if}
</section>
