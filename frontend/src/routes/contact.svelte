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
    import Header from '$lib/contact/Header.svelte';
    import Gallary from '$lib/global/Gallary.svelte';
    import NavBar from '$lib/global/Navigation/Bar.svelte'

    export let products: ProductsApi[]
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark {products} />
    </section>
    <Header />
    <Gallary --mt="67px" />
</main>