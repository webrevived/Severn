<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { findAll } from "$lib/api/products"
    import type { ProductsApi } from "$lib/api/products"

    export const load: Load = async () => {
        const products = await findAll()

        return {
            props: {
                products
            }
        }
    }
</script>

<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Header from '$lib/about/Header.svelte';
    import About from '$lib/about/About.svelte';
    import Message from '$lib/about/Message.svelte';
    import Why from '$lib/about/Why.svelte';
    import Products from '$lib/about/Products.svelte';

    export let products: ProductsApi[]
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark {products} />
    </section>

    <Header />
    <About />
    <Message />
    <Why />
    <Products />
</main>