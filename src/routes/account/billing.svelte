<script lang="ts">
	import CreditCard from '$lib/views/account/billing/CreditCard.svelte';

	/* Secuirty is intersting here */
	/* TODO: Add Primary & Remove Controls */
	let mockCardData = [
		{
			id: 0,
			last: 2331,
			exp: '01/24',
			type: 'Mastercard',
			name: {
				first: 'Adam',
				middle: 'H',
				last: 'Ghowiba'
			},
			primary: true
		},
		{
			id: 0,
			last: 2331,
			exp: '01/24',
			type: 'Mastercard',
			name: {
				first: 'Adam',
				middle: 'H',
				last: 'Ghowiba'
			},
			primary: false
		},
		{
			id: 0,
			last: 2331,
			exp: '01/24',
			type: 'Mastercard',
			name: {
				first: 'Adam',
				middle: 'H',
				last: 'Ghowiba'
			},
			primary: false
		}
	];

	const makePrimary = () => {};

	const removeCard = () => {};
</script>

<section class="x-container">
	<h1 class="heading-2 font-medium text-black-600">Payment Methods</h1>
	<p class="text-1 text-brown-1200">Add or Remove payment methods for quick checkout</p>

	<div class="card-grid gap-1.5rem" grid="~ flow-row" m="t-17.5 b-25">
		{#each mockCardData as card}
			<CreditCard cardData={card} />
		{/each}
	</div>
</section>

<style>
	.card-grid {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-auto-rows: 1fr;
	}
</style>
