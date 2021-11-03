<script lang="ts">
    import RadioContainer from '$lib/products/RadioContainer.svelte'
    import RadioItem from '$lib/products/RadioItem.svelte'
    import Button from "$lib/global/Button.svelte"
    import QuantityInput from "$lib/products/QuantityInput.svelte"
    import GoBack from '$lib/products/BackButton.svelte'
    import ProductsIcon from "$lib/products/ProductsIcons.svelte"
    import { HOST } from '$lib/api/index'
    import type { ProductsApi } from '$lib/api/products'
    export let product: ProductsApi

    // discount value - (change this to some var from strapi at some point)
    const discount = 50
    $: freeShippingAmount = Math.floor(discount - product.price)

    let quantity = 1
    let _sets: string
    let colors: string

    $: sets = parseInt( _sets ?? "1" )
</script>

<section class="px-40 pt-25">
    <GoBack />
    
    <div class="w-full flex gap-10 mt-5">
        <div class="min-w-478px flex flex-col gap-5">
            <img class="w-full h-478px" src="{HOST}{product.cover.url}" alt="">
            <img class="w-full h-478px" src="{HOST}{product.cover.url}" alt="">
        </div>

        <div class="text-black-600">
            <h1 class="text-1 text-brown-1200">{product.category.short_title}</h1>
            <h2 class="heading-1 text-black-600">{product.title}</h2>
            
            <div class="pb-4 border-b border-black-600 mt-9.5">
                <p class="text-1 text-xl text-black-600">${product.price}</p>
            </div>

            <p class="text-1 text-1.125rem text-grey-600 mt-3 leading-[1.75rem]">{product.description ?? "This Item doesn't seem to have a description"}</p>
        
            <div class="flex gap-17.5 mt-12.5">
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

            <form class="mt-11" on:submit|preventDefault>
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
                        <Button>Continue to Checkout</Button>
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
    </div>
</section>