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

<div class="flex">
	<img src="/images/Candle.png" alt="Candle product" class="max-w-45" />

	<div class="flex flex-col w-full py-5 px-8">
		<span class="text-1 text-black-600 mb-2.5">{date}</span>
		<h2 class="capitalize heading-2 font-semibold text-black-600 mb-7.5">{status}</h2>

		<span class="mb-1 text-1 text-brown-1200">
			Order#
			<span class="heading-3 font-medium text-lg text-black-600">{orderNumber}</span>
		</span>
		<span class="text-1 text-brown-1200">
			Order# 
			<span class="heading-3 font-medium text-lg text-black-600">${orderTotal}</span>
		</span>
	</div>

	<div class="flex flex-col text-right py-5">
		{#if totalItems}
			<h1 class="heading-3 font-medium text-black-600 mb-2.5">Total Items</h1>
			<p class="text-1 font-bold text-brown-1200 mb-7">{totalItems}</p>
		{/if}

		<div class="flex flex-col text-1 text-brown-1200 text-right items-end gap-y-3.5">
			{#if status == 'refunded' || status == 'delivered'}
				<button class="w-max capitalize font-bold">Write product review</button>
				<button class="w-max capitalize font-bold">Request refund</button>
			{:else}
				<button class="w-max capitalize font-bold">Track Package</button>
				<button class="w-max capitalize font-bold">Request Cancellation</button>
			{/if}
		</div>

		{#if !totalItems}
			<a class="text-lg text-right font-semibold" href="/account/orders/TESTINGREMOVE">View Details</a>
		{/if}
	</div>
</div>
