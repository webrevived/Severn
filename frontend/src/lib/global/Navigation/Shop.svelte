<script lang="ts">
    import Dropdown from "$lib/global/Navigation/Dropdown.svelte";
    import ShopSeperator from '$lib/global/Navigation/ShopSeperator.svelte';
    import { navToggles } from '$lib/stores'
    import { session } from "$app/stores";
    import type { CategoriesApi } from "$lib/api/categorys";
    
    const categorys: CategoriesApi[] = $session.categorys
</script>

<Dropdown 
    show={navToggles}
    key="shop"
    hoverMode
    on:mouseenter={() => $navToggles.shop = true}
>
    <div class="x-container w-full">
        <div class="max-w-208 mt-32 flex gap-2.5 text-brown-1200 items-center">
            {#each categorys as item, index}
                {#if index != 0}
                    <ShopSeperator />
                {/if}
                <a 
                    class="heading-2 font-semibold" 
                    href="/category/{item.short_title}"
                >{item.short_title}</a>
            {/each}
        </div>
    </div>
</Dropdown> 