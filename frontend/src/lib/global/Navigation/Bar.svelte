<script lang="ts">
    import SearchIcon from "$lib/global/Navigation/SearchIcon.svelte";
    import CartIcon from "$lib/global/Navigation/CartIcon.svelte";
    import Search from "$lib/global/Navigation/Search.svelte";
    import Shop from "$lib/global/Navigation/Shop.svelte"
    import HamburgerIcon from "./HamburgerIcon.svelte";
    import MobileBody from "./MobileBody.svelte";
    import { navToggles } from '$lib/stores'
    
    export let dark = false
    const onMouseOver = () => $navToggles.shop = true
</script>

<div class="relative">
    <nav
        grid="~ rows-1 cols-[max-content_1fr_max-content] gap-0 md:gap-15 lg:gap-26"
        class="relative justify-center"
        class:dark={dark || $navToggles.shop}
        class:z-5={$navToggles.shop}
    >
        <button 
            class="md:hidden"
            text="white-100 dark:black-600"
            grid="col-start-3 col-end-4 row-start-1 row-end-2"
            on:click={ () => $navToggles.mobile = true }
        >
            <HamburgerIcon />
        </button>

        <a 
            class="heading-1 text-2xl tracking-[.03em]" 
            text="white-100 dark:black-600 center md:left"
            grid="-sm:col-start-2 -sm:col-end-3"
            href="/"
        >Saven ®</a>
    
        <div
            class="hidden md:flex items-center gap-15" 
            text="white-100 dark:black-600"
            transition="~ colors duration-150"
        >
            <a class="heading-1 text-lg" href="/about">About</a>
            <a class="heading-1 text-lg" href="/contact">Contact</a>
            <a 
                class="heading-1 text-lg" 
                href="/shop"
                on:mouseenter={onMouseOver}
                on:focus
            >Shop</a>
            <a class="heading-1 text-lg whitespace-nowrap" href="/account">My Account</a>
        </div>
    
        <div
            class="flex items-center gap-9"
            text="white-100 dark:black-600"
            grid="col-start-1 col-end-2 md:col-start-3 md:col-end-4 row-start-1 row-end-2"
        >
            <button class="hidden md:block focus:outline-none" on:click={ $navToggles.shop ? null : () => { $navToggles.search = true }}>
                <SearchIcon />
            </button>
            <button class="focus:outline-none">
                <CartIcon />
            </button>
        </div>
    </nav>
    
    <Search />
    <Shop />
</div>

<!-- Mobile body doesn't need to be relative to the nav bar for now? -->
<MobileBody />