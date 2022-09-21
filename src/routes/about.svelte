<script lang="ts">
	import NavBar from '$lib/global/Navigation/Bar.svelte';
	import About from '$lib/views/about/About.svelte';
	import Header from '$lib/views/about/Header.svelte';
	import Message from '$lib/views/about/Message.svelte';
	import Why from '$lib/views/about/Why.svelte';
</script>

<main>
	<section class="x-container pt-6">
		<NavBar dark />
	</section>

	<Header />
	<About />
	<Message />
	<Why />

	<!-- TODO: Add back in -->
	<!-- <Products /> -->
</main>
