<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import PasswordInput from '$lib/global/Form/PasswordInput.svelte';
	import EmailInput from '$lib/global/Form/EmailInput.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import Bar from '$lib/components/navigation/Bar.svelte';
	import { isEmail, CheckPassword } from '$lib/utils/validation';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import Spinner from '$lib/global/Spinner.svelte';

	const inputs = {
		email: '',
		password: ''
	};

	let ResponseMessage = '';
	$: isValidPassword = CheckPassword(inputs.password);
	$: isValidEmail = isEmail.test(inputs.email);
	$: valid = ResponseMessage.length === 0 && isValidPassword === 3 && isValidEmail;

	$: if (inputs.email.length > 0 && !isValidEmail) {
		ResponseMessage = 'Invalid Email ie (JohnDoe@gmail.com)';
	} else if (inputs.password.length > 0 && isValidPassword != 3) {
		if (isValidPassword === 0) {
			ResponseMessage = 'Password must not contain spaces';
		} else if (isValidPassword === 1) {
			ResponseMessage = 'Password must contain atleast one number';
		} else if (isValidPassword === 2) {
			ResponseMessage = 'Password must contain atleast one special character';
		}
	} else {
		ResponseMessage = '';
	}

	let loading = false;
	const onSubmit = async () => {
		// don't submit if form is not valid
		if (!valid) return;

		loading = true;
		const login = await fetch('/api/account/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(inputs)
		}).then((res) => res.json());
		loading = false;

		if (login.error) {
			if (login.statusCode === 400) {
				ResponseMessage = 'Invalid Email/Password';
			}
		} else {
			$session.user = login;
			goto('/account/');
		}
	};
</script>

<header class="x-container pt-6">
	<Bar dark />
</header>

<main>
	<Header title="My Account" align="center">
		Come join us for fast check and track your orders.
	</Header>

	<section class="x-container">
		<div
			class="max-w-full md:max-w-75/100 border-black-600 border-1 rounded-lg max-w-2xl mx-auto p-8 mb-16"
		>
			<div class="mb-12.5 items-center justify-between" flex="~ col md:row">
				<h2 class="heading-2 font-semibold">Login</h2>

				{#if ResponseMessage.length > 0}
					<div class="flex space-x-2.5">
						<img src="/icons/error-icon.svg" alt="" />
						<p class="heading-3 font-medium" text="lg brown-900">
							{ResponseMessage}
						</p>
					</div>
				{:else if loading}
					<div class="w-15 h-15">
						<Spinner />
					</div>
				{/if}
			</div>

			<form class="flex flex-col gap-8" on:submit|preventDefault={onSubmit}>
				<EmailInput bind:value={inputs.email} placeholder="Email Address" />
				<PasswordInput bind:value={inputs.password} placeholder="Password" />

				<div flex="~ col md:row" class="items-center justify-center md:justify-between gap-y-4">
					<a class="text-base font-semibold border-b-1" href="/forgot">Forgot your password</a>
					<Button>Login Now</Button>
				</div>
			</form>

			<a class="text-base font-semibold border-b-1 mx-auto block max-w-max mt-8" href="/register"
				>Create an account</a
			>
		</div>
	</section>
</main>
