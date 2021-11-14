<script lang="ts">
    import { navToggles, cartItems, CartItem } from "$lib/stores"
    import Container from "$lib/global/Navigation/Cart/Container.svelte";
    import TopBar from "$lib/global/Navigation/Cart/TopBar.svelte";
    import ItemsList from "$lib/global/Navigation/Cart/ItemsList.svelte";
    import BottomBar from "$lib/global/Navigation/Cart/BottomBar.svelte";
    import EmptyCart from "$lib/global/Navigation/Cart/EmptyCart.svelte"
    import type { ProductsApi } from "$lib/api/products"

    export let products: ProductsApi[]
    const TransformCartItemsToProductApi = (cart: CartItem) => ({
        uid: cart.uid,
        item: products.find( (val) => val.id === cart.id  ), 
        quantity: cart.quantity,
    })
    
    $: items = $cartItems.map( TransformCartItemsToProductApi )
    $: total = items.reduce( (acc, curr) => acc + (curr.item.price * curr.quantity), 0 )
</script>

<Container show={navToggles} key="cart">
    <div class="w-full h-full overflow-y-scroll" grid="~ cols-1 rows-[auto_1fr_auto]">
          <TopBar />
          
          {#if items.length > 0}
            <ItemsList {items} />
            <BottomBar {total} />
          {:else}
            <EmptyCart />
          {/if}
    </div>
</Container>