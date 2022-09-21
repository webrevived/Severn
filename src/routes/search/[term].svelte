<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ( { page, fetch } ) => {
        return {
            props: {
                term: page.params.term,
                results: fetch( `/api/search/${page.params.term}` ).then( res => res.json() )
            }
        }
    }
</script>

<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Input from '$lib/search/Input.svelte'
    import Results from "$lib/search/Results.svelte";
    import type { ProductsApi } from "$lib/api/products"
    
    export let term: string;
    export let results: Promise<ProductsApi[]>
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark />
    </section>

    <Input {term} />
    
    {#await results}
        <h1 class="heading-1 text-black-600">Loading...</h1>
    {:then items}
        <Results {items}/>
    {/await}

</main>