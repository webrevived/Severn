<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import Feedback from '$lib/views/home/Feedback.svelte';

	export let src: string;
</script>

<NavBar position="absolute" dark />

<header
	class="flex flex-col relative w-full min-h-[75vh] justify-center bg-header <sm:min-h-[90vh]"
	style="--src: url('{src}')"
>
	<div
		class="heading-wrapper container h-full justify-center items-end flex flex-col flex-grow text-black-600"
	>
		<div class=" gap-2.5 flex flex-col max-w-[400px]">
			<h1 class="text-1">NATURE-INSPIRED SKINCARE FOR MEN</h1>
			<h2 class="heading-1 font-400 mb-2.5 text-[37px] leading-snug italic">
				Handcrafted candels & self care products made in the USA
			</h2>

			<div class="w-full max-w-max button-wrap">
				<Button href="/shop">Shop Now</Button>
			</div>
		</div>
	</div>

	<div class="feedback absolute bottom-0 left-50/100">
		<Feedback />
	</div>
</header>

<style lang="scss">
	header {
		margin-bottom: 40px;
	}

	.bg-header {
		background: var(--src) no-repeat;
		background-size: cover;
		background-position-y: center !important;
		background-color: #f5eee4;
	}

	.feedback {
		width: 80%;
		left: 50%;
		transform: translate(-50%, 50%);
	}

	@media only screen and (max-width: 1024px) {
		.bg-header {
			background-position: 60%;
		}
		.heading-wrapper {
			margin-top: 5rem;
		}
		.feedback {
			width: 80%;
		}
	}

	@media only screen and (max-width: 768px) {
		.bg-header {
			background-color: #f0f0f2 !important;
			background: url('/images/skin_care_hero_mobile.jpg') no-repeat;
			background-size: 70%;
			background-position: 50% 100%;
			background-position-y: 70% !important;
		}
		.feedback {
			left: 0;
			right: 0;
			transform: none;
			width: 100%;
		}
		.heading-wrapper {
			margin-top: 7rem;
			justify-content: start;
			text-align: center;
			align-items: center;

			.button-wrap {
				margin: 0 auto;
			}

			h2 {
				font-size: 35px;
			}
		}
	}
</style>
