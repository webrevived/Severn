<script lang="ts">
    import { HOST } from "$lib/api/index"
    import { cartItems } from "$lib/stores";
    import QuantityInput from "$lib/products/QuantityInput.svelte"
    import type { ProductsApi } from "$lib/api/products";

    export let uid: string;
    export let item: ProductsApi
    export let quantity: number

    const remove = () => cartItems.update( cart => cart.filter( value => value.uid != uid ) )

    $: cartItems.update( cart => {
        const objitem = cart.find( obj => obj.uid === uid )
        objitem.quantity = quantity

        return cart
    } )

    $: console.log( $cartItems )
</script>

<div class="min-h-30 item-layout items-center" grid="~ cols-[120px_auto] rows-[auto_auto_auto] gap-x-7.5">
    <img class="img" src="{HOST}{item.cover.url}" alt="">

    <div class="info flex justify-between text-2 text-brown-1200">
        <h1>{item.category.short_title}</h1>
        <p class="text-0.875rem">$ {(item.price * quantity).toFixed(2)}</p>
    </div>

    <h1 class="title heading-3 text-lg">{item.title}</h1>
    
    <div class="controls flex gap-7.5">
        <QuantityInput bind:value={quantity} />
        <button class="text-2 text-0.875rem text-brown-900" on:click={remove}>Remove</button>
    </div>
</div>

<style>
    .img { grid-area: img; }
    .info { grid-area: info; }
    .title { grid-area: title; }
    .controls { grid-area: controls; }
    
    .item-layout {
        grid-template-areas: 
            "img info"
            "img title"
            "img controls";
    }
</style>