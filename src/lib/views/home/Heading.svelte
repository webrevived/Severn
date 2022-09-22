<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import Feedback from '$lib/views/home/Feedback.svelte';

	export let src: string;
</script>

<NavBar position="absolute" />

<header
	class="flex flex-col relative x-container w-full min-h-213 justify-center bg-header"
	style="--src: url('{src}')"
>
	<div class="heading-wrapper max-w-129.5 h-full justify-center flex flex-col flex-grow">
		<div class=" gap-2.5 flex flex-col">
			<h1 class="text-1 text-white-100">NATURE-INSPIRED SKINCARE FOR MEN</h1>
			<h2 class="heading-1 font-400 text-white-100 mb-2.5 text-[50px] leading-snug italic">
				Handcrafted candels & self care products made in the USA
			</h2>
			<div class="w-full max-w-max">
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
		background-position: left;
		background-color: #b1a28d;
	}

	.feedback {
		width: 80%;
		left: 50%;
		transform: translate(-50%, 50%);
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
			// background-size: 200%;
			background-position: 60%;
			// background-position-y: 75%;
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
