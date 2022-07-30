<script lang="ts">
	import { onMount } from 'svelte';

	// Dumb code to scale an image down automatically without loosing image origin
	const imageScale = (node: HTMLDivElement, value: number = 1) => {
		node.style.all = ''; // clear all inline-styles before computing
		const { width, height } = window.getComputedStyle(node);

		node.style.width = `${parseInt(width) * value}px`;
		node.style.height = `${parseInt(height) * value}px`;
	};

	// key: breakpoint (in pixels), value: scale weight (in percentage)
	const scale = { 1280: 1, 1024: 0.613 };
	const getScale: () => number = () => {
		const width = window.innerWidth;

		const result = Object.keys(scale)
			.map((key) => parseInt(key))
			.sort((a, b) => a - b)
			.reduce((prev, curr) => (width >= curr ? curr : prev));

		return scale[result];
	};

	let imgCache: NodeListOf<HTMLDivElement>;
	const resize = () => {
		// We don't need to grab all the images everytime we resize only on first load
		if (imgCache === null || imgCache === undefined)
			imgCache = document.querySelectorAll('.scale-img');

		const value = getScale();
		imgCache.forEach((node) => imageScale(node, value));
	};

	onMount(() => resize());
</script>

<svelte:window on:resize={resize} />

<section class="relative mt-$mt mb-30 min-h-225 gap-6.25" flex="~ col" align="items-center">
	<img id="spinning" class="w-max h-max mb-2.5" src="/images/Gallary_Circle.png" alt="" />
	<h1 class="text-1 text-brown-1200">Our Gallery</h1>
	<h2 class="heading-1 font-normal max-w-163" text="20px md:37px center black-600">
		Say hi and follow along for our gallery @savencompany
	</h2>

	<img
		class="scale-img"
		pos="static md:absolute top-85 left-12.5 xl:(top-45 left-29)"
		src="/images/Gallary/1.png"
		alt=""
	/>
	<img
		class="scale-img"
		pos="static md:absolute top-114 left-45 xl:(top-90 left-82.5)"
		src="/images/Gallary/2.png"
		alt=""
	/>
	<img
		class="scale-img"
		pos="static md:absolute top-145 left-12.5 xl:(top-143 left-29)"
		src="/images/Gallary/3.png"
		alt=""
	/>

	<img
		class="scale-img"
		pos="hidden md:block absolute top-135 right-62 xl:(top-126 right-112.5)"
		src="/images/Gallary/4.png"
		alt=""
	/>
	<img
		class="scale-img"
		pos="hidden md:block absolute top-85 right-12.5 xl:(top-143 right-32)"
		src="/images/Gallary/5.png"
		alt=""
	/>
	<img
		class="scale-img"
		pos="hidden md:block absolute top-145 right-12.5 xl:(top-60 right-32)"
		src="/images/Gallary/6.png"
		alt=""
	/>
</section>

<style>
	#spinning {
		animation: spin 4s infinite linear;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
</style>
