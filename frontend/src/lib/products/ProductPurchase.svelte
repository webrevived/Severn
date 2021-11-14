<script lang="ts">
    import RadioContainer from '$lib/products/RadioContainer.svelte'
    import RadioItem from '$lib/products/RadioItem.svelte'
    import Button from "$lib/global/Button.svelte"
    import QuantityInput from "$lib/products/QuantityInput.svelte"
    import GoBack from '$lib/products/BackButton.svelte'
    import ProductsIcon from "$lib/products/ProductsIcons.svelte"
    import { HOST } from '$lib/api/index'
    import { cartItems } from "$lib/stores"
    import type { ProductsApi } from '$lib/api/products'
    export let product: ProductsApi

    // discount value - (change this to some var from strapi at some point)
    const discount = 50
    $: freeShippingAmount = Math.floor(discount - product.price)

    let quantity = 1
    let _sets: string
    let colors: string

    $: sets = parseInt( _sets ?? "1" )

    const addToCart = () => {
        cartItems.update( cart => [
            ...cart, 
            { uid: Math.floor(Math.random()*16777215).toString(16), id: product.id, quantity } 
        ] )
    }
</script>

<section class="x-container pt-10 lg:(px-40 pt-25)">
    <GoBack />
    
    <div class="w-full mt-5 product-areas" grid="~ gap-y-5 gap-x-10">
        <img class="w-full h-250px lg:h-478px img-1 object-cover" src="{HOST}{product.cover.url}" alt="">
        <img class="w-full h-250px lg:h-478px img-2 object-cover" src="{HOST}{product.cover.url}" alt="">
    

        <div class="text-black-600 information">
            <h1 class="text-1 text-brown-1200">{product.category.short_title}</h1>
            <h2 class="heading-1 text-black-600">{product.title}</h2>
            
            <div class="pb-4 border-b border-black-600 mt-9.5">
                <p class="text-1 text-xl text-black-600">${product.price}</p>
            </div>

            <p class="text-1 text-1.125rem text-grey-600 mt-3 leading-[1.75rem]">{product.description ?? "This Item doesn't seem to have a description"}</p>
        
            <div class="flex -lg:flex-wrap gap-17.5 mt-12.5">
                <ProductsIcon src="/icons/GiftPack.svg">
                    free gift pack
                </ProductsIcon>
                <ProductsIcon src="/icons/HighQuality.svg">
                    high quality
                </ProductsIcon>
                <ProductsIcon src="/icons/FastShipping.svg">
                    fast shipping
                </ProductsIcon>
                <ProductsIcon src="/icons/Support.svg">
                    24/7 support
                </ProductsIcon>
            </div>
        </div>

        <form class="mt-6.25 buying-area" on:submit|preventDefault>
            <p class="text-2 text-black-600 mb-2.5">No of Quantity</p>
            <RadioContainer bind:value={_sets} let:key>
                <RadioItem value="1" {key} checked>Set of 1</RadioItem>
                <RadioItem value="2" {key}>Set of 2</RadioItem>
                <RadioItem value="4" {key}>Set of 4</RadioItem>
                <RadioItem value="8" {key}>Set of 8</RadioItem>
            </RadioContainer>

            <p class="text-2 text-black-600 mt-8 mb-2.5">Free Gift Pack Envelope Color</p>
            <RadioContainer bind:value={colors} let:key>
                <RadioItem value={"none"}  {key} checked>None</RadioItem>
                <RadioItem value={"pink"}  {key}>Pink</RadioItem>   
                <RadioItem value={"red"}   {key}>Red</RadioItem>
                <RadioItem value={"black"} {key}>Black</RadioItem>
            </RadioContainer>

            <div class="w-full flex items-center mt-12">
                <div class="mr-5">
                    <QuantityInput bind:value={quantity} />
                </div>
                <div class="w-full grid">
                    <Button on:click={ addToCart }>Add to Cart</Button>
                </div>
            </div>

            <div class="grid w-full mt-8">
                <Button outline>
                    Quick Checkout - Pay with PayPal
                    <img src="/images/Paypal-Logo.png" alt="PayPal Logo">
                </Button>
            </div>

            <!-- change calculation to total price in cart and not just product price -->
            {#if freeShippingAmount > 0}
                <div class="w-full mt-8 pb-4" border="b-1px black-600">
                    <p class="heading-3 text-lg text-center">You are ${freeShippingAmount} away from free shipping</p>
                </div>
            {/if}
        </form>

    </div>
</section>

<style>
    .img-1 { grid-area: img-1; }
    .img-2 { grid-area: img-2; }
    .information { grid-area: information; }
    .buying-area { grid-area: buying-area; }
    
    .product-areas {
        grid-auto-rows: max-content;
        grid-template-columns: 1fr;

        grid-template-areas: 
            "img-1"
            "img-2"
            "information"
            "buying-area";
    }

    @screen lg {
        .product-areas {
            grid-template-rows: repeat(2, 478px);
            grid-template-columns: minmax(78px, 478px) 1fr;
    
            grid-template-areas: 
                "img-1 information"
                "img-2 buying-area";
        }
    }
</style>