
<script lang="ts">
    import ItemCarosel from '$lib/global/ItemCarosel.svelte'
    import { items } from '$lib/FakeApi/Products'

    const categorys = [
        {
            category: 'Premium Candles',
            description: 'These best-smelling candles come in divine fragrances, with notes that\'ll transport you into a different space.',
            button: 'Shop Premium Candles',
            items
        },
        {
            category: 'Self Care Products',
            description: 'Our self care products are well know and being use actively by multiple of dermatologist.',
            button: 'Self Care Products',
            items
        },
    ]
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