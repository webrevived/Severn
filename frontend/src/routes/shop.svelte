<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Products from '$lib/shop/Products.svelte'
    import Deals from '$lib/shop/Deals.svelte'
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark />
    </section>

    <Products />
    <Deals />
</main>