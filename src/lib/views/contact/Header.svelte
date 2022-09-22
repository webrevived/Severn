<script lang="ts">
	import HeaderMailTo from '$lib/views/contact/HeaderMailTo.svelte';
	import ContactForm from './ContactForm.svelte';
	import ContactHeader from './ContactHeader.svelte';

</script>

<section class="section">
	<div class="contact-header">
		<ContactHeader
			title="Contact Us"
			desc="Saven Company Staff is readily available all the time, we will love to hear your problems and
		will get back to you soon."
		/>
	</div>

	<div class="flex flex-col md:flex-row gap-18 mt-10">
		<HeaderMailTo title="Customer Care">
			For general questions about the order delivery or other general inquiries, Email use on
			<span class="text-[#83612E]">customercare@savencompany.com</span>
		</HeaderMailTo>

		<HeaderMailTo title="Message from Owner">
			Hi, This is Isreal. It's been a pleasure for me to provide the service we always wanted to
			provide you. Send me an email if you got some questions
		</HeaderMailTo>
	</div>
</section>

<style class="scss">
</style>
