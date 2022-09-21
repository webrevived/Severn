<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import TextArea from '$lib/global/Form/TextArea.svelte';
</script>

<form class="form section">
	<div class="inputs">
		<h1 class="inputs__title">You can also fill out the form and We will get back to you soon.</h1>

		<Input value="" placeholder="Full Name" />
		<Input value="" placeholder="Email Address" />
		<TextArea value="" placeholder="Your message" />

		<div>
			<Button>Send Message</Button>
		</div>
	</div>

	<div class="img-wrap">
		<img class="img-wrap__img" src="/images/contact_us_letters.webp" alt="" />
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
        
        &__img {
            display: block;
            object-fit: cover;
        }
	}

	@media only screen and (max-width: 767px) {
		.form {
			flex-direction: column-reverse;
		}

		.img-wrap {
			width: 100%;
            max-width: none;

			&__img {
				max-height: 300px;
                width: 100%;
			}
		}
	}
</style>
