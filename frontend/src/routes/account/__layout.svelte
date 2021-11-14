<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { findAll } from "$lib/api/products"
    import type { ProductsApi } from "$lib/api/products"

    export const load: Load = async () => {
        const products = await findAll()

        return {
            props: {
                products
            }
        }
    }
</script>

<script lang="ts">
	import Header from '$lib/global/HeaderHR.svelte';
	import Bar from '$lib/global/Navigation/Bar.svelte';
	import { page } from "$app/stores"

	export let products: ProductsApi[]
</script>

<header class="x-container pt-6">
	<Bar {products} dark />
</header>

<main class="pt-6">
	<Header title="My Account" align="center">
		Come join us for fast check and track your orders.
	</Header>
	
	<nav 
		class="x-container heading-3 w-full capitalize mb-25 gap-5 md:gap-24" 
		flex="~"
		justify="center"
		text="-md:base -lg:lg black-600"
		font="semibold"
	>
		<a 
			class="pb-0.5 border-black-600" 
			class:border-b={ $page.path.includes("/account/orders") }
			href="/account/orders"
		>Your orders</a>
		<a 
			class="pb-0.5"
			class:border-b={ $page.path === "/account/buyagain" }
			href="/account/buyagain"
		>Buy again</a>
		<a 
			class="pb-0.5"
			class:border-b={ $page.path === "/account/settings" }
			href="/account/settings"
		>settings</a>
		<a 
			class="pb-0.5"
			class:border-b={ $page.path === "/account/billing" }
			href="/account/billing"
		>Payment Methods</a>
		<a 
			class="pb-0.5"
			href="/signout"
		>Sign out</a>
	</nav>

    <slot />
</main>

