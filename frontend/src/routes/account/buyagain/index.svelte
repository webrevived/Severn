<script>
	import HeaderSection from '../HeaderSection.svelte';
	import ProductPreview from '../ProductPreview.svelte';
</script>

<HeaderSection
	title="Order Again"
	desc="Order again the same product without adding them to cart"
/>

<div class="flex flex-col gap-5 my-10">
	{#each Array(2) as _}
		<ProductPreview status="delivered" />
	{/each}
</div>
