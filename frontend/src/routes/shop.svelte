<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import type { ProductsApi } from "$lib/api/products"
    import { findAll as findAllProducts } from "$lib/api/products"
    import type { CategoryProps } from '$lib/api/categorys'
    import { findAll as findAllCategories } from '$lib/api/categorys'
    import { TransformCategoryToProps } from '$lib/api/transforms'
    
    export const load: Load = async () => {
        const [products, response] = await Promise.all([findAllProducts(), findAllCategories()])
        
        return {
            props: {
                products,
                _categorys: response.map( TransformCategoryToProps ),
            }
        }
    }
</script>

<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Products from '$lib/shop/Products.svelte'
    import Deals from '$lib/shop/Deals.svelte'

    export let products: ProductsApi[]
    export let _categorys: CategoryProps[];
    const categorys = _categorys.filter( prop => prop.items.length > 0 )
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark {products} />
    </section>

    <Products {categorys} />
    <Deals />
</main>