<script lang="ts">
	import dataAccess from '$lib/data-access';
	import BottomBar from '$lib/components/navigation/Cart/BottomBar.svelte';
	import Container from '$lib/components/navigation/Cart/Container.svelte';
	import EmptyCart from '$lib/components/navigation/Cart/EmptyCart.svelte';
	import ItemsList from '$lib/components/navigation/Cart/ItemsList.svelte';
	import TopBar from '$lib/components/navigation/Cart/TopBar.svelte';
	import { navToggles } from '$lib/stores';
	import { useQuery } from '@sveltestack/svelte-query';

	const cartQuery = useQuery('cart', async () => {
		return dataAccess.cart.getCart();
	});
</script>

<Container show={navToggles} key="cart">
	<div class="w-full h-full overflow-y-scroll" grid="~ cols-1 rows-[auto_1fr_auto]">
		<TopBar />

		{#if $cartQuery.isLoading}
			<h2>Loading...</h2>
		{:else if $cartQuery.isSuccess}
			{#if $cartQuery.data.total_items > 0}
				<ItemsList items={$cartQuery.data.line_items} />
				<BottomBar total={$cartQuery.data.subtotal.raw} />
			{:else}
				<EmptyCart />
			{/if}
		{:else}
			<h2>Error</h2>
		{/if}
	</div>
</Container>
