<script>
	import Button from '$lib/global/Button.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import Bar from '$lib/global/Navigation/Bar.svelte';
</script>

<header class="x-container pt-6">
	<Bar dark />
</header>

<main>
	<Header title="My Account" align="center">
		Come join us for fast check and track your orders.
	</Header>
	
	<section class="x-container">
		<div class="max-w-full md:max-w-75/100 border-black-600 border-1 rounded-lg max-w-2xl mx-auto p-8 mb-16">
			<h2 class="heading-2 font-semibold mb-12.5">Login</h2>
		
			<div class="flex flex-col gap-8">
				<Input value="" placeholder="Email Address" />
				<Input value="" placeholder="Password" />
			</div>
		
			<div flex="~ col md:row" class="items-center justify-center md:justify-between my-8 gap-y-4">
				<a class="text-base font-semibold border-b-1" href="/forgot">Forgot your password</a>
				<Button>Login Now</Button>
			</div>
		
			<a class="text-base font-semibold border-b-1 mx-auto block max-w-max" href="/signup">Create an account</a>
		</div>
	</section>
</main>

