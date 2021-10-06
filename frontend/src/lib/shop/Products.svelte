<script lang="ts">
    import type { CategoryProps } from '$lib/api/categorys';
    import ItemCarosel from '$lib/global/ItemCarosel.svelte'
    
    export let categorys: CategoryProps[];
</script>

<section class="w-full x-container pt-22.5" flex="~ col">
    <!-- just here for semantic reasons -->
    <h1 class="opacity-0 w-0 h-0">Shop Our Products</h1>
    
    <div>
        <h1 class="heading-1 text-black-600">Shop Our Products</h1>
        <p class="text-1 text-brown-1200">We are having variety of good products. From good quality premium candles to mens self care p[roducts.</p>
    </div>

    <hr class="my-15 text-brown-1200">
    {#each categorys as category}
        <ItemCarosel {...category} />
        <hr class="my-15 text-brown-1200">
    {/each}
    
</section>