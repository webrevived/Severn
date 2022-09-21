<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import Feedback from '$lib/views/home/Feedback.svelte';

	export let src: string;
</script>

<header
	flex="~ col"
	class="relative x-container w-full min-h-213 justify-center bg-header"
	p="t-6"
	style="--src: url('{src}')"
>
	<NavBar />

	<div class="heading-wrapper max-w-129.5 h-full justify-center" flex="~ grow col">
		<div class=" gap-2.5" flex="~ col">
			<h1 class="text-1 text-white-100">NATURE-INSPIRED SKINCARE FOR MEN</h1>
			<h2 class="heading-1 font-400 text-white-100 mb-2.5 text-[50px] leading-snug italic">
				Handcrafted candels & self care products made in the USA
			</h2>
			<div class="w-full max-w-max">
				<Button href="/shop">Shop Now</Button>
			</div>
		</div>
	</div>

	<div
		class="feedback absolute bottom-0 left-50/100"
		transform="~ -translate-x-50/100 translate-y-50/100"
	>
		<Feedback />
	</div>
</header>

<style lang="scss">
	.bg-header {
		background: var(--src) no-repeat;
		background-size: cover;
		background-position: 70%;
		background-color: #b1a28d;
	}

	.feedback {
		width: 80%;
	}

	@media only screen and (max-width: 1024px) {
		.heading-wrapper {
			justify-content: start;
			margin-top: 5rem;
		}
		.feedback {
			width: 80%;
		}
	}

	@media only screen and (max-width: 768px) {
		.bg-header {
			background-size: 200%;
			background-position: 100%;
			background-position-y: 75%;
		}
		.feedback {
			left: 0;
			right: 0;
			transform: none;
			width: 100%;
		}
		.heading-wrapper {
			h2 {
				font-size: 35px;
			}
		}
	}
</style>
