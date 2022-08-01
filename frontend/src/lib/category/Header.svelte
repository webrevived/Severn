<script lang="ts">
	import NavBar from '$lib/global/Navigation/Bar.svelte';

	export let title: string;
	export let description: string;
	export let thumbnailSrc: string;
</script>

<header class="w-full relative bg-white-300" flex="~ col-reverse md:row" justify="between">
	<div class="z-1 x-container py-6 w-full absolute top-0 left-0">
		<NavBar dark />
	</div>

	<div class="header-wrap">
		<div class="mx-7 flex justify-end py-10 md:mx-25.5 md:flex flex-col gap-5">
			<h1 class="capitalize text-67px text-black-600 font-normal font-tiempos">
				{title}
			</h1>
			<p class="text-xl text-brown-1200">
				{description}
			</p>
		</div> 

		<img
			class="header-image min-w-0 max-w-full h-350px md:h-auto object-cover w-full max-h-600px"
			src={thumbnailSrc}
			alt={title}
		/>
	</div>
</header>

<style lang="scss">
	.header-wrap {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 0.9fr;
	}
	.header-image {
		height: 100%;
	}
</style>
