<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = ({ page }) => {
        const { params } = page

        return {
            props: {
                ...params
            }
        }
    }
</script>

<script lang="ts">
    import { fuzzySearch as ProductSearch } from "$lib/api/products";
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Input from '$lib/search/Input.svelte'
    import Results from "$lib/search/Results.svelte";
    
    export let term: string;
    $: SearchResults = ProductSearch(term)
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark/>
    </section>
    
    <Input {term} />

    {#await SearchResults}
        <Results items={null} />
    {:then items}
        <Results {items}/>
    {/await}
</main>