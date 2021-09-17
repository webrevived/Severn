<script lang="ts">
    import ItemCarosel from "$lib/global/ItemCarosel.svelte";
    import { items } from '$lib/FakeApi/Products'
</script>

<section p="x-5 md:x-25 t-44">
    <ItemCarosel
        category = "Our Best Sellers"
        description = "Earl of East is a lifestyle brand with a focus on fragrance of best candles we have"
        button = "Shop all products"
        {items} 
    />
</section>