<script>
	import Button from '$lib/global/Button.svelte';
	import Checkbox from '$lib/global/Form/Checkbox.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import IconHr from '$lib/global/IconHR.svelte';
	import EmptyProducts from '../EmptyProducts.svelte';
	import HeaderSection from '../HeaderSection.svelte';
	import ProductPreview from '../ProductPreview.svelte';

	let activeOrders = [...Array(3)];
	let pastOrders = [];
</script>

<!-- Active Orders -->
<section>
	<HeaderSection title="Active Orders" desc="The orders that are still in progress" />
	{#if activeOrders.length == 0}
		<EmptyProducts
			src="/images/light_bulb.png"
			title="Oops! you don't have any active orders"
			desc="Search for our products and start adding them to your list"
		/>
	{:else}
		<div class="flex flex-col gap-7 mt-10">
			{#each activeOrders as _}
			<div class="border-1 rounded-lg p-5">
				<ProductPreview />
			</div>
			{/each}
		</div>
	{/if}
</section>

<section class="mt-20">
	<HeaderSection title="Previous Orders" desc="Your completed orders with us" />
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

<!-- Previous Orders -->
<style>
</style>
