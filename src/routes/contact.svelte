<script lang="ts">
	import Header from '$lib/views/contact/Header.svelte';
	import Gallary from '$lib/global/Gallary.svelte';
	import NavBar from '$lib/components/navigation/Bar.svelte';
</script>

<main>
	<NavBar dark />

	<div class="container">
		<Header />
		<Gallary --mt="67px" />
	</div>
</main>
