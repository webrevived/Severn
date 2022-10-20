<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import Bar from '$lib/components/navigation/Bar.svelte';
</script>

<header class="x-container pt-6">
	<Bar dark />
</header>

<main>
	<Header title="Reset Password" align="center">
		Come join us for fast check and track your orders.
	</Header>

	<section class="x-container">
		<div class="border-black-600 border-1 rounded-lg max-w-full md:max-w-75/100 mx-auto p-8 mb-16">
			<h2 class="heading-2 text-black-600 mb-8 ">Forget password?</h2>

			<div class="inputs flex flex-col gap-8">
				<Input value="" placeholder="Email Address" />
			</div>

			<div flex="~ col md:row" class="items-center justify-between my-8 gap-y-4">
				<a href="/login" class="text-base font-semibold border-b-1">Cancel</a>
				<Button>Submit</Button>
			</div>

			<h3 class="text-base font-semibold  mx-auto block max-w-max border-b-1">
				<a href="/contact">Contact customer support</a>
			</h3>
		</div>
	</section>
</main>
