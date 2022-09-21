<script>
	import Input from '$lib/global/Form/Input.svelte';

	let email = '';
</script>

<section class="w-full flex flex-col md:flex-row min-h-37.5">
	<div class="w-full md:w-1/2 bg-white-300 gap-5" p="x-11 md:x-30 y-8" flex="~ col">
		<h1 class="heading-2 -sm:text-lg text-black-600">Want some good Deals</h1>
		<p class="text-1 text-brown-1200">Subscribe to our newsletter for amazing discounts.</p>
	</div>

	<form
		class="w-full md:w-1/2 gap-5 text-brown-1200"
		p="x-11 y-8"
		flex="~ col"
		on:submit|preventDefault={null}
	>
		<h1 class="text-1 font-bold leading-[150%]">Stay up to date</h1>

		<div class="flex gap-3">
			<div class="w-277px">
				<Input placeholder="Email Address" bind:value={email} --size="12px" />
			</div>
			<button class="text-2 text-[#83612E] leading-[150%] w-13" border="b-1 [#83612E]"
				>Submit</button
			>
		</div>

		<p class="text-2 max-w-max leading-[150%]">
			Want to get in touch with our Support Team? <span class="font-bold">Contact Us</span>
		</p>
	</form>
</section>
