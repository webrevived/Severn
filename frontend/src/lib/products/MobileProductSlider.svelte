<script lang="ts">
	import LocalIcon from '$lib/global/LocalIcon.svelte';

	export let images: string[] = [];
	export let imageHight: string = '400px';

	let currentSlideIndex: number = 0;
	let imagesContainer: HTMLElement;
	let transformAmount = 0;

	const nextSlide = () => setSlide(currentSlideIndex + 1);
	const previousSlide = () => setSlide(currentSlideIndex - 1);

	const setSlide = (index: number) => {
		if (index < 0 || index > images.length - 1) return;

		const imageElement = imagesContainer.querySelector<HTMLImageElement>('.slider__image');
		const imageWidth = imageElement.width;
		const isPostiveChange = currentSlideIndex < index;

		isPostiveChange ? (transformAmount -= imageWidth) : (transformAmount += imageWidth);
		imagesContainer.style.transform = `translateX(${transformAmount}px)`;
		currentSlideIndex = index;
	};
</script>

<div class="slider">
	<button class="action action--left" disabled={currentSlideIndex == 0} on:click={previousSlide}>
		<LocalIcon icon="next" color="white" size={30} transform={180} />
	</button>

	<button
		class="action action--right"
		disabled={currentSlideIndex == images.length - 1}
		on:click={nextSlide}
	>
		<LocalIcon icon="next" color="white" size={30} />
	</button>

	<div class="images" bind:this={imagesContainer}>
		{#each images as image}
			<img class="slider__image" src={image} alt="product image" style:height={imageHight} />
		{/each}
	</div>

	<div class="tracker">
		{#each Array(images.length) as _, i}
			<div class="tracker__track" class:active={currentSlideIndex === i} />
		{/each}
	</div>
</div>

<style lang="scss">
	.slider {
		overflow: hidden;
		position: relative;

		&__image {
			width: 100%;
			object-fit: cover;
			flex: 1 0 auto;
		}
	}

	.images {
		width: 100%;
		display: flex;
		transition: transform 0.25s ease-in-out;
	}

	.action {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		z-index: 10;
		top: 50%;
		transform: translateY(-50%);
		width: 40px;
		height: 40px;
		transition: opacity 0.25s ease-in-out;
		@apply bg-black-600 text-white-300 rounded-full;

		&:disabled {
			opacity: 0;
		}

		&--left {
			left: 2rem;
		}

		&--right {
			right: 2rem;
		}
	}

	.tracker {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 1rem;
		display: flex;
		align-items: flex-end;
		transition: height 0.15s ease-in;
		gap: 1rem;

		&__track.active {
			height: 6px;
		}

		&__track {
			width: 20px;
			height: 3px;
			opacity: 0.9;
			@apply bg-black-600;
		}
	}

	@media only screen and (max-width: 475px) {
		.action {
			&--left {
				left: 1rem;
			}

			&--right {
				right: 1rem;
			}
		}
	}
</style>
