<script lang="ts">
    import ItemCard from "$lib/global/ItemCard.svelte";
    import { CramItemCalc } from "$lib/utils/index"
    import { onMount } from "svelte";
    import { TransformProductsToItem } from "$lib/api/transforms";
    import type { ProductsApi } from "$lib/api/products";
    
    let ItemContainer: HTMLDivElement
    let totalItems = 0
    export let products: ProductsApi[]
    $: items = products
        .sort( () => Math.random() - 0.5 )
        .slice(0, totalItems)
        .map( (value) => TransformProductsToItem(value, value.category) )

    const onResize = () => {
        totalItems = CramItemCalc(ItemContainer)
        if (totalItems < 1) totalItems = 1
    }
    
    onMount( onResize )
</script>

<svelte:window on:resize={onResize} />

<section class="w-full x-container my-25">
    <h1 class="heading-1 font-medium text-black-600">Other products you might like</h1>

    <div class="w-full flex gap-13 mt-10" bind:this={ItemContainer}>
        {#each items as product}
            <ItemCard {...product} />
        {/each}
    </div>
</section>