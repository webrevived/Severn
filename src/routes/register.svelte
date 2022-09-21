<script lang="ts">
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import Button from '$lib/global/Button.svelte';
	import Checkbox from '$lib/global/Form/Checkbox.svelte';
	import EmailInput from '$lib/global/Form/EmailInput.svelte';
	import PasswordInput from '$lib/global/Form/PasswordInput.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import Bar from '$lib/global/Navigation/Bar.svelte';
	import { CheckPassword, isEmail } from '$lib/utils/validation';
	import * as bcryptjs from 'bcryptjs';
	import Spinner from '$lib/global/Spinner.svelte';
	const { hash } = bcryptjs;

	const inputs = {
		first: '',
		last: '',
		email: '',
		password: ''
	};

	let ResponseMessage = '';
	$: isValidFirst = !inputs.first.includes(' ');
	$: isValidLast = !inputs.last.includes(' ');
	$: isValidPassword = CheckPassword(inputs.password);
	$: isValidEmail = isEmail.test(inputs.email);
	$: valid =
		ResponseMessage.length === 0 &&
		isValidFirst &&
		isValidLast &&
		isValidPassword === 3 &&
		isValidEmail;

	$: if (!isValidFirst) {
		ResponseMessage = 'First name must contain any spaces';
	} else if (!isValidLast) {
		ResponseMessage = 'Last name must contain any spaces';
	} else if (inputs.email.length > 0 && !isValidEmail) {
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
		if (!valid) return;

		const body = JSON.stringify({ ...inputs });
		loading = true;
		const result = await fetch('/api/account/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body
		}).then((res) => res.json());
		loading = false;

		if (result.ok) {
			$session.user = result;
			goto('/account/');
		} else {
			const { message } = result.data[0]?.messages[0];
			if (message) ResponseMessage = message;
		}
	};
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
			<div class="mb-12.5 items-center justify-between" flex="~ col md:row">
				<h2 class="heading-2 font-semibold">New Account</h2>

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
				<Input bind:value={inputs.first} placeholder="First name" />
				<Input bind:value={inputs.last} placeholder="Last name" />
				<EmailInput bind:value={inputs.email} placeholder="Email Address" />
				<PasswordInput bind:value={inputs.password} placeholder="Password" />
				<span class="font-semibold text-base flex items-center gap-3 uppercase">
					Join newsletter <Checkbox />
				</span>

				<div flex="~ col md:row" class="items-center justify-between gap-y-4">
					<a href="/forgot" class="text-base font-semibold border-b-1">Forgot your password</a>
					<Button>Register</Button>
				</div>
			</form>

			<h3 class="text-base font-semibold mt-8  mx-auto block max-w-max">
				Already have an account? <a href="/login" class="border-b-1">Login</a>
			</h3>
		</div>
	</section>
</main>
