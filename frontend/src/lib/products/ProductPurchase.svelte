<script lang="ts">
    import Button from "$lib/global/Button.svelte"
    import QuantityInput from "$lib/products/QuantityInput.svelte"
    import GoBack from '$lib/products/BackButton.svelte'
    import ProductsIcon from "$lib/products/ProductsIcons.svelte"
    import Dropdown from '$lib/products/Dropdown.svelte'
    import { HOST } from '$lib/api/index'
    import { cartItems, navToggles } from "$lib/stores"
    import type { ProductsApi } from '$lib/api/products'
    export let product: ProductsApi

    let quantity = 1
    let colors: string

    const addToCart = () => {
        $navToggles.cart = true
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
            <p class="text-2 text-black-600 mb-2.5">Free Gift Pack Envelope Color</p>
            <Dropdown bind:value={colors} list={{ "Pink": "pink", "Red": "red", "Black": "black" }} />

            <p class="text-2 text-black-600 mt-12 mb-2.5">No of Quantity</p>
            <div class="w-full flex flex-col md:(flex-row items-center) gap-y-5">
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