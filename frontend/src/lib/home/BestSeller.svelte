<script lang="ts">
    import ItemCarosel from "$lib/global/ItemCarosel.svelte";
    import type { Items } from '$lib/interfaces/Items'

    let items: Items[] = [
        {
           src: '/images/Candle.png',
           category: 'Premium Candles',
           title: 'Diptyque - Premium Fragranced Candles',
           price: 11, 
        },
        {
           src: '/images/Candle.png',
           category: 'Premium Candles',
           title: 'Curology - Face Wash with Advance Formula',
           price: 11, 
        },
        {
           src: '/images/Candle.png',
           category: 'Premium Candles',
           title: 'Sooth Operator - Mens & Myth Shaving Cream',
           price: 11, 
        },
        {
           src: '/images/Candle.png',
           category: 'Premium Candles',
           title: 'Sooth Operator - Ready Gift for Candle Lovers',
           price: 11, 
        },
        {
           src: '/images/Candle.png',
           category: 'Premium Candles',
           title: 'Diptyque - Premium Fragranced Candles',
           price: 11, 
        },
        {
           src: '/images/Candle.png',
           category: 'Premium Candles',
           title: 'Curology - Face Wash with Advance Formula',
           price: 11, 
        },
        {
           src: '/images/Candle.png',
           category: 'Premium Candles',
           title: 'Sooth Operator - Mens & Myth Shaving Cream',
           price: 11, 
        },
        {
           src: '/images/Candle.png',
           category: 'Premium Candles',
           title: 'Sooth Operator - Ready Gift for Candle Lovers',
           price: 11, 
        },
    ]
</script>

<section p="x-5 md:x-25 t-44">
    <ItemCarosel
        category = "Our Best Sellers"
        description = "Earl of East is a lifestyle brand with a focus on fragrance of best candles we have"
        button = "Shop all products"
        {items} 
    />
</section>