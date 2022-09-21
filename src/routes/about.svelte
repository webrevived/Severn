<script lang="ts">
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import About from '$lib/views/about/About.svelte';
	import Header from '$lib/views/about/Header.svelte';
	import Message from '$lib/views/about/Message.svelte';
	import Why from '$lib/views/about/Why.svelte';
</script>

<main>
	<NavBar dark />

	<div class="container">
		<Header />
		<About />
		<Message />
		<Why />
	</div>

	<!-- TODO: Add back in -->
	<!-- <Products /> -->
</main>
