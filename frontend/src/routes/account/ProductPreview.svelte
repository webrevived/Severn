<script lang="ts">
	/* TODO: Parse data */

	type Status = 'processing' | 'shipped' | 'delivered' | 'refunded';
	export let date = 'September, 17 2020';
	export let status: Status = 'processing';
	export let orderNumber = '59281';
	export let orderTotal = 129.21;
	export let totalItems = 0;
</script>

<!-- TODO: Add order again button for dilevred products -->

<div class="flex ">
	<img src="/images/Candle.png" alt="Candle product" class="max-w-40" />

	<div class="flex flex-col justify-between ml-6 py-3 text-grey-600 text-base mr-auto">
		<span>{date} </span>
		<h2 class="capitalize font-semibold text-black-600 text-xl mb-auto">{status}</h2>

		<span class="mb-1">Order# <span class="font-bold text-black-600">{orderNumber}</span></span>
		<span>Order# <span class="font-bold text-black-600">{orderTotal}</span></span>
	</div>

	<div class="flex flex-col justify-between ml-6 py-6 text-brown-600 text-base text-right">
		{#if totalItems}
			<h1 class="text-black-600 text-lg font-semibold">Total Items: <span class="font-bold">{totalItems}</span></h1>
		{/if}

		<div class="flex flex-col text-right">
			{#if status == 'refunded' || status == 'delivered'}
				<span class="capitalize"> Write product review </span>
				<span class="capitalize"> Request refund </span>
			{:else}
				<span class="capitalize"> Track Package </span>
				<span class="capitalize"> Request Cancellation </span>
			{/if}
		</div>

		{#if !totalItems}
			<a class="text-lg text-right font-semibold" href="/account/orders/TESTINGREMOVE">View Details</a>
		{/if}
	</div>

	<div />
</div>
