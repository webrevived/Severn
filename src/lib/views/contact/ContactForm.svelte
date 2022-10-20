<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import TextArea from '$lib/global/Form/TextArea.svelte';
	import { imageSlide } from '$lib/actions/imageSlide';

	let imageWrapElement: HTMLFormElement;
</script>

<form class="form section--md" bind:this={imageWrapElement}>
	<div class="inputs">
		<h1 class="inputs__title">You can also fill out the form and We will get back to you soon.</h1>

		<Input value="" placeholder="Full Name" />
		<Input value="" placeholder="Email Address" />
		<TextArea value="" placeholder="Your message" />

		<div>
			<Button>Send Message</Button>
		</div>
	</div>

	<div class="img-wrap" id="wrapper">
		<img
			use:imageSlide={{
				scrollTrigger: {
					trigger: '#wrapper',
					start: 'top bottom-=20%',
					end: 'bottom bottom-=20%'
				}
			}}
			class="img-wrap__img"
			src="/images/contact_us_letters.webp"
			alt=""
		/>
	</div>
</form>

<style lang="scss">
	.form {
		display: flex;
		gap: var(--space-lg);
	}

	.inputs {
		justify-content: center;
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: var(--space-md);

		&__title {
			font-size: var(--text-xl);
			max-width: 40ch;
			font-family: var(--font-tiempos);
		}
	}

	.img-wrap {
		position: relative;
		max-width: max-content;
		justify-self: center;
		min-width: 50%;
		height: 600px;
		overflow: hidden;

		&__img {
			right: 0;
			position: absolute;
			width: 100%;
			display: block;
			object-fit: cover;
			height: 100%;
			@include imageZoom;
		}
	}

	@media only screen and (max-width: 767px) {
		.form {
			flex-direction: column-reverse;
		}

		.img-wrap {
			width: 100%;
			height: 300px;
			max-width: none;

			&__img {
				max-height: 300px;
				width: 100%;
			}
		}
	}
</style>
