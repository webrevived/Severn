<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    import type { CategoriesApi } from '$lib/api/categorys'
    import { findOneByTitle } from '$lib/api/categorys'
    import { findAll as findAllProducts } from "$lib/api/products";
    import type { ProductsApi } from "$lib/api/products";

    export const load: Load = async ( { page } ) => {
        const [category, products] = await Promise.all( [ findOneByTitle(page.params.title), findAllProducts() ] )
        
        return {
            props: { category, products }
        }
    }
</script>

<script lang="ts">
    import Header from '$lib/category/Header.svelte'
    import Products from '$lib/category/Products.svelte'
    export let category: CategoriesApi
    export let products: ProductsApi[]
</script>

<Header {category} {products}  />
<Products {category} />
