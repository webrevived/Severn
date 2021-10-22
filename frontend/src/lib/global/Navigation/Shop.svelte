<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Dropdown from "$lib/global/Navigation/Dropdown.svelte";
    import ShopSeperator from '$lib/global/Navigation/ShopSeperator.svelte';
    import { findAll } from '$lib/api/categorys'
    import { navToggles } from '$lib/stores'
</script>

<Dropdown 
    show={navToggles}
    key="shop"
    hoverMode
    on:mouseenter={() => $navToggles.shop = true}
>
    <div class="x-container w-full">
        <div class="max-w-208 mt-32 flex gap-2.5 text-brown-1200 items-center">
            {#await findAll() then categorys}
                {#each categorys as item, index}
                    {#if index != 0}
                        <ShopSeperator />
                    {/if}
                    <a 
                        class="heading-2 font-semibold" 
                        href="/category/{item.short_title}"
                    >{item.short_title}</a>
                {/each}
            {/await}
        </div>
    </div>
</Dropdown> 