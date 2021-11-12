<script lang="ts">
    import Item from "$lib/global/Navigation/Cart/Item.svelte"
    import { flip } from "svelte/animate"
    import type { ProductsApi } from "$lib/api/products";

    interface item {
        uid: string
        item: ProductsApi;
        quantity: number;
    }

    export let items: item[];
</script>

<div class="flex flex-col w-full px-10 pt-10 gap-y-7.5">
    {#each items as item (item.uid)}
        <div animate:flip={{ duration: 200 }}>
            <Item {...item} />
        </div>
    {/each}
</div>
