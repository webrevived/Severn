<script lang="ts">
	import About from '$lib/about/About.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import type { ShippingMethod } from '@chec/commerce.js/types/shipping-method';

	export let shippingMethods: ShippingMethod[];
	export let title: string = 'Shipping Method';
</script>

<div class="flex flex-col gap-5">
	<h3 class="heading-3 font-semibold">{title}</h3>

	<div class="flex flex-col gap-8">
		{#each shippingMethods as method, i}
			<div class="flex justify-between border-b border-brown-1200 pb-3">
				<div class="flex gap-3">
					<input
						checked={i == 0}
						type="radio"
						name="shipping_method"
						value={method.id}
						class="w-4"
					/>
					<h4>{method.description}</h4>
				</div>

				<h6>{method.price.formatted_with_symbol}</h6>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
</style>
