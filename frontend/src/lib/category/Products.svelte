<script lang="ts">
    import type { CategoriesApi } from "$lib/api/categorys";
    import { HOST } from '$lib/api/index'
    import IconHR from '$lib/global/IconHR.svelte'
    import Item from '$lib/global/ItemCard.svelte'

    export let category: CategoriesApi

    let showProducts = 4
    $: _products = category.products.slice(0, showProducts)
</script>

<main class="x-container flex flex-col gap-7.5 py-17.5">
    <h1 class="heading-3" text="center black-600">{category.short_title}</h1>
    <IconHR src="{HOST}{category.icon.url}" />

    <div class="flex flex-wrap justify-center mt-7.5 gap-13">
        {#each _products as product}
            <Item
                href="/products/{product.id}"
                src="{HOST}{product.cover.url}" 
                category={category.short_title} 
                title={product.title} 
                price={product.price} 
            />
        {/each}
    </div>

    <div class="flex w-full justify-center">
        {#if showProducts <= category.products.length}
            <button 
                class="heading-3 text-black-600 pb-2 border-b-1 w-max hover:(italic font-medium)"
                on:click={() => showProducts += 4}
            >
                Load More
            </button>
        {/if}
    </div>
</main>