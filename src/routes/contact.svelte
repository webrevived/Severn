<script lang="ts">
	import Header from '$lib/views/contact/Header.svelte';
	import Gallary from '$lib/global/Gallary.svelte';
	import NavBar from '$lib/components/navigation/Bar.svelte';
</script>

<main>
	<section class="x-container pt-6">
		<NavBar dark />
	</section>
	
	<Header />
	<Gallary --mt="67px" />
</main>
