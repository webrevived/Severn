<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import type { CategoryProps } from '$lib/api/categorys'
    import { findAll as findAllCategories } from '$lib/api/categorys'
    import { TransformCategoryToProps } from '$lib/api/transforms'
    
    export const load: Load = async () => {
        const response = await findAllCategories()
        
        return {
            props: {
                _categorys: response.map( TransformCategoryToProps )
            }
        }
    }
</script>

<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Products from '$lib/shop/Products.svelte'
    import Deals from '$lib/shop/Deals.svelte'

    export let _categorys: CategoryProps[];
    const categorys = _categorys.filter( prop => prop.items.length > 0 )
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark />
    </section>

    <Products {categorys} />
    <Deals />
</main>