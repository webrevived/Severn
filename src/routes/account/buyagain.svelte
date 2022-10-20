<script>
	import ProductPreview from '$lib/views/account/ProductPreview.svelte';
</script>

<section class="x-container flex flex-col gap-5 my-10">
	<h1 class="heading-2 font-medium text-black-600">Order Again</h1>
	<p class="text-1 text-brown-1200 mb-15">
		Order again the same product without adding them to cart
	</p>

	{#each Array(2) as _}
		<ProductPreview status="delivered" />
	{/each}
</section>
