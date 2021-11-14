<script lang="ts">
    import NavBar from '$lib/global/Navigation/Bar.svelte'
    import Products from '$lib/shop/Products.svelte'
    import Deals from '$lib/shop/Deals.svelte'
    import { session } from '$app/stores';
    import { TransformCategoryToProps } from '$lib/api/transforms'
    import type { CategoryProps } from '$lib/api/categorys'

    let _categorys: CategoryProps[] = $session.categorys.map( TransformCategoryToProps );
    const categorys = _categorys.filter( prop => prop.items.length > 0 )
</script>

<main>
    <section class="x-container pt-6">
        <NavBar dark />
    </section>

    <Products {categorys} />
    <Deals />
</main>