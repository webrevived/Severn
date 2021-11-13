<script>
	import HeaderSection from '../HeaderSection.svelte';
	import ProductPreview from '../ProductPreview.svelte';
</script>

<ProductPreview totalItems={7} />

<!-- TODO: Create seperate componant -->
<div class="item-table my-15">
	<h4 class="no">No</h4>
	<h4 class="name">Product name</h4>
	<h4 class="qty">Qty</h4>
	<h4 class="category">Category</h4>
	<h4 class="price">Price</h4>

	{#each Array(3) as _}
		<span>01</span>
		<h3>Candel Wax frangence</h3>
		<span>02</span>
		<span>Preiumum Candels</span>
		<span>$15</span>
		<div id="line" class="bg-brown-1200 w-full h-1px" />
	{/each}
</div>

<HeaderSection
	title="Billing & Shipping Details"
	desc="Your payment billing address and shipping address"
/>

<!-- TODO: Create seperate componant -->
<div class="border-1 rounded-lg p-5 flex justify-between text-base mt-5 mb-20">
	<div class="flex flex-col">
		<h4 class="text-lg">Shipping Address</h4>
		<span class="uppercase">adam h ghowiba</span>
		<span>1020 Waverly Dr.</span>
		<span>Longwood, Florida 32750</span>
	</div>

	<div class="flex flex-col">
		<h4 class="text-lg">Payment Method</h4>
		<span>VISA ***3377</span>
	</div>

	<div class="flex flex-col">
		<h4 class="text-lg">Shipping Status</h4>
		<span>EST Arrival: <span>10/12/20 </span></span>
		<span>Shipped By: <span>FedEx </span></span>
	</div>
</div>

<style>
	.item-table {
		display: grid;
		grid-template-columns: auto 1fr auto auto auto;
		grid-template-areas: 'no name qty category price';
		gap: 1rem;
		column-gap: 2rem;
	}
	h4 {
		margin-bottom: 5px;
	}
	#line {
		grid-column: 1/-1;
	}
	span {
		color: #6d6762;
	}
	.no {
		grid-area: no;
	}
	.name {
		grid-area: name;
	}
	.qty {
		grid-area: qty;
	}
	.category {
		grid-area: category;
	}
	.price {
		grid-area: price;
	}
</style>
