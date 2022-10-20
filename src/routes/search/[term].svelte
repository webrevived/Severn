<script lang="ts">
	import Input from '$lib/components/search/Input.svelte';
	import NavBar from '$lib/components/navigation/Bar.svelte';

	export let term: string;
	/* TODO: FIX */
	// export let results: Promise<ProductsApi[]>;
</script>

<main>
	<section class="x-container pt-6">
		<NavBar dark />
	</section>

	<Input {term} />

	<!-- {#await results}
		<h1 class="heading-1 text-black-600">Loading...</h1>
	{:then items}
		<Results {items} />
	{/await} -->
</main>
