<script lang="ts">
	import Item from '$lib/global/Navigation/Cart/Item.svelte';
	import type { Asset } from '@chec/commerce.js/types/asset';
	import type { CheckoutTokenLineItem } from '@chec/commerce.js/types/checkout-token';
	import type { LineItem } from '@chec/commerce.js/types/line-item';

	export let lineItems: LineItem[];
</script>

<div class="flex flex-col gap-5">
	{#each lineItems as item}
		<div class="item">
			<img src={item.image.url} alt="" />

			<div class="w-full flex flex-col">
				<div class="flex justify-between w-full">
					<h4 class="text-base text-grey-600">Candels</h4>
					<h4>{item.price.formatted_with_symbol}</h4>
				</div>
				<h3 class="font-tiempos text-md">{item.name}</h3>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.item {
		display: flex;
		gap: 1rem;

		img {
			flex-shrink: 0;
			width: 90px;
			height: 90px;
		}
	}
</style>
