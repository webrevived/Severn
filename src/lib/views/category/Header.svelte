<script lang="ts">
	import Bar from '$lib/components/navigation/Bar.svelte';

	export let title: string;
	export let description: string;
	export let thumbnailSrc: string;
</script>

<Bar dark backgroundColor="transparent" />

<header class="w-full relative bg-white-300 flex flex-col-reverse justify-between md:flex-row">
	<div class="header-wrap">
		<div class="text-wrap mx-7 flex justify-end py-10 md:mx-25.5 md:flex flex-col gap-5">
			<h1 class="capitalize text-67px text-black-600 font-normal font-tiempos <sm:text-[55px]">
				{title}
			</h1>
			<p class="text-xl text-brown-1200 <sm:text-[16px]">
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
		min-height: 400px;
		height: 100%;
	}
	.text-wrap {
		gap: 0.5rem;

		p {
			line-height: 1.5;
		}
	}

	@media only screen and (max-width: 1024px) {
		.header-wrap {
			grid-template-columns: 1fr;
		}
		.text-wrap {
			padding-top: calc(90px + 3rem);
			padding-bottom: 5rem;
		}
		.header-image {
			min-height: 450px;
			object-position: 60%;
		}
	}
</style>
