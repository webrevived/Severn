<script>
	import Button from '$lib/global/Button.svelte';
</script>

<section
	class="container gap-12 w-full min-h-167 items-center justify-center overflow-x-hidden"
	flex="~ col-reverse md:row"
	p="t-35 md:t-55"
>
	<div class="flex flex-col gap-5 text-center md:text-left">
		<h1 class="text-1 text-brown-1200">ABOUT SEVERN COMPANY</h1>

		<h2 class="heading-1 <md:text-2xl text-black-600 max-w-119 mb-2.5">
			At Saven, We have Premium Candles along with Self Care Products
		</h2>

		<p class="text-1 text-brown-1200 max-w-123 leading-[150%] mb-15">
			Saven Company is know of its premium products and all time positive reviews by the customers.
			We founded Servern Company in 2021 with the idea of providing quality products such as
			fragranced candles, mens and womens self car products.
			<br /><br />
			We love this planet and we believe it’s incredibility important to take care of it. Our decision
			to go green was a no-brainer but we also want to make it something that’s easy for everyone to
			do.
		</p>

		<div class="flex <md:place-content-center">
			<Button href="/about" outline>About Us</Button>
		</div>
	</div>

	<div class="relative min-w-320px h-75 md:h-587px">
		<img id="spinning" class="absolute right-1/2 md:right-0" src="/images/About_Title.png" alt="" />

		<img class="w-full h-full object-cover" src="/images/About_Thumbnail.png" alt="" />
	</div>
</section>

<style>
	#spinning {
		animation: spin 4s infinite linear;
	}
	@keyframes spin {
		from {
			transform: translate(50%, -50%) rotate(0deg);
		}
		to {
			transform: translate(50%, -50%) rotate(359deg);
		}
	}
</style>
