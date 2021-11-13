<script>
	import Button from '$lib/global/Button.svelte';
	import Checkbox from '$lib/global/Form/Checkbox.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import IconHr from '$lib/global/IconHR.svelte';
	import Bar from '$lib/global/Navigation/Bar.svelte';
	import { onMount, stop_propagation } from 'svelte/internal';
</script>


<section class="x-container pt-6">
	<Bar dark />
</section>

<Header title="Reset Password" align="center">
	Come join us for fast check and track your orders.
</Header>

<div class="border-black-600 border-1 rounded-lg max-w-2xl mx-auto p-8 mb-16">
	<h2 class="text-black-600 font-semibold mb-8 text-xl">Forget password?</h2>

	<div class="inputs flex flex-col gap-8">
		<Input value="" placeholder="Email Address" />
	</div>

	<div class="flex items-center justify-between my-8">
		<span class="text-base font-semibold border-b-1">Forgot your password</span>
		<Button>Submit</Button>
	</div>

	<h3 class="text-base font-semibold  mx-auto block max-w-max border-b-1">
		<a href="/contact">Contact customer support</a>
	</h3>
</div>

