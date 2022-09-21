<script lang="ts">
	import HeaderMailTo from '$lib/views/contact/HeaderMailTo.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import TextArea from '$lib/global/Form/TextArea.svelte';
	import Button from '$lib/global/Button.svelte';

	const values = {
		name: '',
		email: '',
		message: ''
	};
</script>

<section class="mt-43 x-container">
	<h1 class="heading-1 text-black-600">Contact Us</h1>
	<p class="heading-3 font-light text-black-600">
		Saven Company Staff is readily available all the time, we will love to hear your problems and
		will get back to you soon.
	</p>

	<div class="flex flex-col md:flex-row gap-25.5 mt-10">
		<HeaderMailTo title="Customer Care">
			For general questions about the order delivery or other general inquiries, Email use on <span
				class="text-[#83612E]">customercare@savencompany.com</span
			>
		</HeaderMailTo>
		<HeaderMailTo title="Message from Owner">
			Hi, This is Isreal. It’s been a pleasure for me to provide the service we always wanted to
			provide you. Send me an email if you got some questions
		</HeaderMailTo>
	</div>

	<form class="mt-27.5" grid="~ auto-cols-fr flow-row lg:flow-col gap-30 md:gap-20">
		<div class="flex flex-col gap-11.25 flex-shrink">
			<h1 class="heading-1 text-black-600 mb-6">
				You can also fill out the form and We will get back to you soon.
			</h1>

			<Input bind:value={values.name} placeholder="Full Name" />
			<Input bind:value={values.email} placeholder="Email Address" />
			<TextArea bind:value={values.message} placeholder="Your message" />
			<div>
				<Button>Send Message</Button>
			</div>
		</div>

		<div class="relative max-w-max justify-self-center md:self-center">
			<img
				class="absolute right-1/2 md:right-0 select-none"
				transform="~ -translate-y-1/2 translate-x-1/2"
				src="/images/Circle_ContactUs.png"
				alt=""
			/>
			<img src="/images/Leons.png" alt="" />
		</div>
	</form>
</section>
