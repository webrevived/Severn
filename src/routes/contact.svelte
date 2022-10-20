<script lang="ts">
	import Header from '$lib/views/contact/Header.svelte';
	import Gallary from '$lib/global/Gallary.svelte';
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import ContactForm from '$lib/views/contact/ContactForm.svelte';
</script>

<main>
	<NavBar dark />

	<div class="container">
		<Header />
		<ContactForm />
	</div>
</main>
