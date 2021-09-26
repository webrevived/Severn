<script lang="ts">
    import ItemCarosel from "$lib/global/ItemCarosel.svelte";
    import { items } from '$lib/FakeApi/Products'
    let options = {
        category: "Get to know about our Premium Products",
        description: "",
        button: 'Shop All Products',
        items
    }
</script>

<section class="x-container mb-30">
    <ItemCarosel fw="400" {...options} />
</section>