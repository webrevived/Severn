<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { findAll, fuzzySearch as ProductSearch } from "$lib/api/products"

    export const load: Load = async ({ page }) => {
        const { params } = page

        const products = await findAll()

        return {
            props: {
                ...params,
                products
            }
        }
    }
</script>

<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Input from '$lib/search/Input.svelte'
    import Results from "$lib/search/Results.svelte";
    import type { ProductsApi } from "$lib/api/products";
    
    export let term: string;
    export let products: ProductsApi[]
    $: SearchResults = ProductSearch(term)
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark {products}/>
    </section>
    
    <Input {term} />

    {#await SearchResults}
        <Results items={null} />
    {:then items}
        <Results {items}/>
    {/await}
</main>