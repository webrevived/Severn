<script>
	import Button from '$lib/global/Button.svelte';
	import Checkbox from '$lib/global/Form/Checkbox.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import Bar from '$lib/global/Navigation/Bar.svelte';
</script>

<header class="x-container pt-6">
	<Bar dark />
</header>

<main>
	<Header title="Create an account" align="center">
		Come join us for fast check and track your orders.
	</Header>
	
	<section class="x-container">
		<div class="border-black-600 border-1 rounded-lg max-w-full md:max-w-75/100 mx-auto p-8 mb-16">
			<h2 class="heading-2 font-semibold text-black-600 mb-12.5">New account</h2>
		
			<div class="inputs flex flex-col gap-8">
				<Input value="" placeholder="First name" />
				<Input value="" placeholder="Last name" />
				<Input value="" placeholder="Email Address" />
				<Input value="" placeholder="Password" />
				<span class="font-semibold text-base flex items-center gap-3 uppercase">
					Join newsletter <Checkbox />
				</span>
			</div>
		
			<div flex="~ col md:row" class="items-center justify-between my-8 gap-y-4">
				<a href="/forgot" class="text-base font-semibold border-b-1">Forgot your password</a>
				<Button>Register</Button>
			</div>
		
			<h3 class="text-base font-semibold  mx-auto block max-w-max">
				Already have an account? <a href="/login" class="border-b-1">Login</a>
			</h3>
		</div>
	</section>
</main>
