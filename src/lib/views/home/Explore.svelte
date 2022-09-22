<script>
	import ExploreItem from '$lib/views/home/ExploreItem.svelte';
</script>

<section class="section--sm container gap-5 justify-center items-center text-center flex flex-col">
	<h1 class="text-1 text-brown-1200">Explore our Products</h1>
	<h2 class="heading-1 text-black-600 mb-20">At Saven, We Have</h2>

	<div class="flex flex-wrap gap-31.5 justify-center">
		<ExploreItem src="/icons/Womans_Self_Care.svg">Womans Self Care</ExploreItem>
		<ExploreItem src="/icons/Mens_Self_Care.svg">Mens Self Care</ExploreItem>
		<ExploreItem src="/icons/Premium_Candles.svg">Premium Candles</ExploreItem>
	</div>
</section>
