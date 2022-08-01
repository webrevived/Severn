<script lang="ts">
	import { navToggles, cartItems, CartItem } from '$lib/stores';
	import Container from '$lib/global/Navigation/Cart/Container.svelte';
	import TopBar from '$lib/global/Navigation/Cart/TopBar.svelte';
	import ItemsList from '$lib/global/Navigation/Cart/ItemsList.svelte';
	import BottomBar from '$lib/global/Navigation/Cart/BottomBar.svelte';
	import EmptyCart from '$lib/global/Navigation/Cart/EmptyCart.svelte';
	import { useMutation, useQuery } from '@sveltestack/svelte-query';
	import dataAccess from '$lib/data-access';

	const cartQuery = useQuery('cart', async () => {
		return dataAccess.cart.getCart();
	});

	/**
	 * Handle event dispatcher 'cartAction' which will invalidate the
	 * cart query and refresh the cart.
	 */
	const handleCartAction = () => {
		// $cartQuery.refetch();
	};


	$: if ($navToggles.cart) $cartQuery.refetch();
</script>

<Container show={navToggles} key="cart">
	<div class="w-full h-full overflow-y-scroll" grid="~ cols-1 rows-[auto_1fr_auto]">
		<TopBar />

		{#if $cartQuery.isLoading}
			<h2>Loading...</h2>
		{:else if $cartQuery.isSuccess}
			{#if $cartQuery.data.total_items > 0}
				<ItemsList items={$cartQuery.data.line_items} on:cartAction={handleCartAction} />
				<BottomBar total={$cartQuery.data.subtotal.raw} />
			{:else}
				<EmptyCart />
			{/if}
		{:else} 
      <h2>Error</h2>
    {/if}
	</div>
</Container>
