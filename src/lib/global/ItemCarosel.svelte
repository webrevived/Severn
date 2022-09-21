<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import ArrowButton from '$lib/global/ArrowButton.svelte';
	import ItemCard from '$lib/global/ItemCard.svelte';
	import { tweened } from 'svelte/motion';
	import { expoInOut } from 'svelte/easing';
	import type { Product } from '@chec/commerce.js/types/product';

	export let category: string;
	export let description: string;
	export let button: string;
	export let href: string = `/category/${button}`;
	export let fw = 'normal';

	export let items: Product[];
	let shift = tweened(0, { duration: 250, easing: expoInOut });
	$: transform = $shift * (270 + 20);

	let OuterContainer: HTMLDivElement;
	let InnerContainer: HTMLDivElement;

	let isShifting = false;

	const increment = async () => {
		if (!isShifting && Math.ceil($shift) !== 0) {
			isShifting = true;
			await shift.update((value) => Math.round(value) + 1);
			isShifting = false;
		}
	};

	const decrement = async () => {
		const outer = OuterContainer.getBoundingClientRect();
		const inner = InnerContainer.getBoundingClientRect();

		if (!isShifting && inner.right > outer.right) {
			isShifting = true;
			await shift.update((value) => Math.round(value) - 1);
			isShifting = false;
		}
	};
</script>

<article class="carosel w-full items-center md:items-start gap-x-25" flex="~ col md:row">
	<div class="arrows hidden md:flex gap-13.5 ">
		<ArrowButton on:click={increment} flipped />
		<ArrowButton on:click={decrement} />
	</div>

	<div class="items-inner">
		<div class="flex flex-col w-full max-w-300px">
			<h1 class="heading-1 mb-5" style="--fw: {fw ?? 'bold'}">{category}</h1>
			<p class="text-1 text-brown-1200 max-w-66 mb-18 <md:mb-7">{description}</p>

			<div class="mb-12">
				<Button {href}>{button}</Button>
			</div>
		</div>

		<div class="w-270px md:w-full overflow-hidden" bind:this={OuterContainer}>
			<div
				class="w-max flex gap-5 flex-grow"
				style="transform: translateX({transform}px);"
				bind:this={InnerContainer}
			>
				{#each items as item}
					<div>
						<ItemCard
							href="/products/{item.permalink}"
							category=""
							price={item.price.raw}
							src={item.image?.url}
							title={item.name}
						/>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex md:hidden justify-center gap-13.5 w-full self-center mt-10">
			<ArrowButton on:click={increment} flipped />
			<ArrowButton on:click={decrement} />
		</div>
	</div>
</article>

<style lang="scss">
	.arrows {
		display: flex;
		justify-content: flex-end;
		width: 100%;
	}

	.carosel {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	.items-inner {
		display: flex;
		align-items: center;
		gap: var(--space-xl);
		overflow-x: hidden;
	}

	@media screen and (max-width: 767px) {
		.arrows {
			display: none;
		}
		.items-inner {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
	}
</style>
