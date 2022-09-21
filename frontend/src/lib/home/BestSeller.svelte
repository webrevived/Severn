<script lang="ts">
    import ItemCarosel from "$lib/global/ItemCarosel.svelte";
    import { shuffleArray } from "$lib/utils"
    import { session } from "$app/stores";
    import { TransformProductsToItem } from "$lib/api/transforms";
    import type { ProductsApi } from "$lib/api/products"
    
    // this is just shuffling at random and slicing the 10 items
    // in future we will change this to ordering and slicing 10 items
    const BestSeller = shuffleArray($session.products as ProductsApi[])
        .slice(0, 10)
        .map( (item) => TransformProductsToItem(item, item.category) )
</script>

<section p="x-5 md:x-25 t-44">
    <ItemCarosel
        category = "Our Best Sellers"
        description = "Earl of East is a lifestyle brand with a focus on fragrance of best candles we have"
        button = "Shop all products"
        href="/shop"
        items={BestSeller}
    />
</section>