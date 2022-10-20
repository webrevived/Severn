<script lang="ts">
	import Rating from '$lib/views/home/Rating.svelte';
	import { onMount } from 'svelte';
	import QuotesIndex from './QuotesIndex.svelte';
	import { gsap } from '$lib/utils/gsap';

	interface Review {
		rating: number;
		quote: string;
		author: string;
		id: number;
		published_at: string;
		updated_at: string;
		/* Convert to date */
		created_at: string;
	}

	export let quotes: Review[];
	let quotesImage: HTMLImageElement;
	let reviewWrapperElement: HTMLElement;

	let index = 0;

	const getIndex = (shift: number, arr: Review[]) => {
		if (shift >= 0) return shift % arr.length;
		return (arr.length + (shift % arr.length)) % arr.length;
	};

	const onKeyPress = ({ key }: KeyboardEvent) => {
		if (key === 'ArrowLeft') index -= 1;
		if (key === 'ArrowRight') index += 1;
	};

	const onMouseEnter = () => window.addEventListener('keydown', onKeyPress);
	const onMouseLeave = () => window.removeEventListener('keydown', onKeyPress);

	const animateImage = () => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				start: 'top bottom-=20%',
				end: 'bottom bottom-=20%',
				trigger: reviewWrapperElement,
				toggleActions: 'play none none reverse'
			}
		});

		timeline.from(quotesImage, {
			width: '90%'
		});

		return () => {
			timeline.kill();
		};
	};

	onMount(() => {
		const destoryImageAnimation = animateImage();
		return () => destoryImageAnimation();
	});

	$: selected = quotes[getIndex(index, quotes)];
</script>

<section
	class="my-[5em]"
	on:focus
	on:blur
	bind:this={reviewWrapperElement}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
>
	<div class="image-wrap">
		<img
			class="review-image"
			src="/images/Quotes_Thumbnail.png"
			alt="Product display"
			bind:this={quotesImage}
		/>
	</div>

	<div class="review gap-4.5">
		<Rating rating={selected.rating} />

		<p class="heading-3 max-w-120.25 px-5 <sm:text-lg">{selected.quote}</p>
		<h1 class="text-2 text-brown-1200 uppercase">- {selected.author} -</h1>

		<div class="flex gap-2.5 ">
			{#each quotes as _, i}
				<QuotesIndex active={getIndex(index, quotes) === i} on:click={() => (index = i)} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		background-color: var(--color-white-300);
		height: 90vh;
	}

	.review {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
	}

	.image-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;

		.review-image {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			object-fit: cover;
			object-position: center;
			@include imageZoom;
		}
	}

	@media only screen and (max-width: 767.9px) {
		.review {
			padding: var(--space-xl) 0;
		}
		section {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			height: auto;
		}
	}
</style>
