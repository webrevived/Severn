<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    import type { CategoriesApi } from '$lib/api/categorys'

    export const load: Load = async ( { page, fetch } ) => {
        const category = await fetch(`/api/categorys/title/${ page.params.title }`)
            .then( res => res.json() )
        
        return {
            props: { category }
        }
    }
</script>

<script lang="ts">
    import Header from '$lib/category/Header.svelte'
    import Products from '$lib/category/Products.svelte'
    export let category: CategoriesApi
</script>

<Header {category}  />
<Products {category} />
