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
    import Header from '$lib/global/HeaderHR.svelte'
    import Answers from '$lib/return/Answers.svelte'
    import MailToCard from '$lib/global/MailTo/Card.svelte'

    export let products: ProductsApi[]
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark {products} />
    </section>

    <Header title = "Returns and Exchanges">
        You got questions? we got answers for you. If you have any other query feel free to contact our <span class="text-hex-83612E">support team.</span>
    </Header>

    <Answers />

    <MailToCard />
</main>