<script lang="ts">
	import About from '$lib/about/About.svelte';
	import Accordian from '$lib/global/Accordian.svelte';
	import HeaderSection from '../HeaderSection.svelte';
	import CreditCard from './CreditCard.svelte';

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

<HeaderSection title="Payment Methods" desc="Add or Remove payment methods for quick checkout" />

<!-- Button Section -->
<div class="card-grid">
	{#each mockCardData as card}
		<CreditCard cardData={card} />
	{/each}
</div>

<style>
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		grid-auto-rows: 1fr;
		grid-auto-flow: row;
	}
</style>
