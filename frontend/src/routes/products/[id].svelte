<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    import { findOneByID, findAll } from '$lib/api/products'
    
    export const load: Load = async ({ page }) => {
        const { params } = page
        const id = parseInt(params.id)

        if ( isNaN(id) ) return { status: 404, error: new Error( "Product ID needs to be number" ) }
        const [all, product] = await Promise.all([ findAll(), findOneByID(id) ])
        if ( product === null ) return { status: 404, error: new Error(`No Product found by the id of ${id}`) }
        
        return {
            props: { all, product }
        }
    }
</script>

<script lang="ts">
    import OtherProducts from "$lib/products/OtherProducts.svelte";
    import ProductFeatures from "$lib/products/Features.svelte"
    import ProductPurchase from "$lib/products/ProductPurchase.svelte"
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import type { ProductsApi } from '$lib/api/products'
    
    export let product: ProductsApi
    export let all: ProductsApi[]
</script>

<header class="x-container pt-6">
    <NavBar products={all} dark />
</header>

<main>
    <ProductPurchase {product} />
    <ProductFeatures {product} />
    <OtherProducts products={all} />
</main>