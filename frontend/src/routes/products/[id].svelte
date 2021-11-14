<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    
    export const load: Load = async ({ page, fetch }) => {
        const { params } = page
        const id = parseInt(params.id)
        
        if ( isNaN(id) ) return { status: 404, error: new Error( "Product ID needs to be number" ) }
        const product = await fetch(`/api/products/${id}`).then( res => res.json() )
        if ( product === null ) return { status: 404, error: new Error(`No Product found by the id of ${id}`) }
        
        return {
            props: { product }
        }
    }
</script>

<script lang="ts">
    import OtherProducts from "$lib/products/OtherProducts.svelte";
    import ProductFeatures from "$lib/products/Features.svelte"
    import ProductPurchase from "$lib/products/ProductPurchase.svelte"
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import { session } from "$app/stores"
    import type { ProductsApi } from '$lib/api/products'
    
    export let product: ProductsApi
    let all: ProductsApi[] = $session.products
</script>

<header class="x-container pt-6">
    <NavBar dark />
</header>

<main>
    <ProductPurchase {product} />
    <ProductFeatures {product} />
    <OtherProducts products={all} />
</main>