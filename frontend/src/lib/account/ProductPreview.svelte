<script lang="ts">
	import { HOST } from '$lib/api/index';
	import { session } from '$app/stores';

	// tempory product selection for image url
	const product = $session.products[0];

	/* TODO: Parse data */

	type Status = 'processing' | 'shipped' | 'delivered' | 'refunded';
	export let date = 'September, 17 2020';
	export let status: Status = 'processing';
	export let orderNumber = '59281';
	export let orderTotal = 129.21;
	export let totalItems = 0;
</script>

<!-- TODO: Add order again button for dilevred products -->

<div class="flex flex-col text-center sm:flex-row items-center">
	<img
		src="{HOST}{product.cover.url}"
		alt="Candle product"
		class="max-h-40 w-full object-cover sm:max-w-45 "
	/>

	<div class="flex flex-col w-auto py-5 px-8 sm:items-start">
		<span class="text-1 text-grey-600 sm:mb-2.5">{date}</span>
		<h2 class="capitalize heading-2 font-semibold text-black-600 sm:mb-7.5">{status}</h2>

		<span class="mb-1 text-1 text-brown-1200">
			Order#
			<span class="heading-3 font-medium text-lg text-black-600">{orderNumber}</span>
		</span>
		<span class="text-1 text-brown-1200">
			Order#
			<span class="heading-3 font-medium text-lg text-black-600">${orderTotal}</span>
		</span>
	</div>

	<div class="flex flex-col text-center py-5 items-center sm:ml-auto text-right items-end">
		{#if totalItems}
			<h1 class="heading-3 font-medium text-black-600 mb-2.5 sm:w-full">Total Items</h1>
			<p class="text-1 font-bold text-brown-1200 mb-7 sm:w-full">{totalItems}</p>
		{/if}

		<div
			class="flex text-center flex-col items-center sm:text-1 text-brown-1200 items-end ml-auto text-right gap-y-3.5"
		>
			{#if status == 'refunded' || status == 'delivered'}
				<button class="w-max capitalize font-bold">Write product review</button>
				<button class="w-max capitalize font-bold">Request refund</button>
			{:else}
				<button class="w-full sm:w-max capitalize font-bold text-brown-600">Track Package</button>
				<button class="w-full sm:w-max capitalize font-bold text-brown-600">Request Cancellation</button>
			{/if}
		</div>

		{#if !totalItems}
			<a
				class="text-lg font-semibold text-center sm:text-right"
				href="/account/orders/TESTINGREMOVE">View Details</a
			>
		{/if}
	</div>
</div>
