<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import { tweened } from 'svelte/motion';

	export let total = 0;
	let _total = tweened(total, { duration: 200 });
	$: $_total = total;
</script>

<div class="flex flex-col mt-7.5 px-10 gap-5 bottom-bar">
	<div class="w-full flex justify-between pb-5 mb-5" border="b-1 black brown-1200">
		<h1 class="heading-3 text-black-600">Sub Total</h1>
		<p class="text-1 text-xl text-black-600">${$_total.toFixed(2)}</p>
	</div>

	<Button outline>
		Pay with <img src="/images/PayPal-Logo.png" alt="PayPal" />
	</Button>
	<Button href="/checkout">Continue to Checkout</Button>

	<a class="w-max self-center text-2 text-brown-900 font-bold mb-7.5 underline" href="/shop"
		>Shop More Products</a
	>
</div>

<style>
	@media only screen and (max-width: 425px) {
		.bottom-bar {
			padding: 1em;
		}
	}
</style>
