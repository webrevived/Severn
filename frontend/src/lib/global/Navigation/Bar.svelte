<script>
    import SearchIcon from "$lib/global/Navigation/SearchIcon.svelte";
    import CartIcon from "$lib/global/Navigation/CartIcon.svelte";
    import Search from "$lib/global/Navigation/Search.svelte";
    import HamburgerIcon from "./HamburgerIcon.svelte";
    import MobileBody from "./MobileBody.svelte";
    
    export let dark = false

    const values = {
        search: ''
    }

    let mobile = false
    let search = false
    let shop = false
    let cart = false
</script>

<div class="relative">
    <nav
        grid="~ rows-1 cols-[max-content_1fr_max-content] gap-0 md:gap-15 lg:gap-26"
        class="relative justify-center"
        class:dark
    >
        <button 
            class="md:hidden"
            text="white-100 dark:black-600"
            grid="col-start-3 col-end-4 row-start-1 row-end-2"
            on:click={ () => mobile = true }
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
        >
            <a class="heading-1 text-lg" href="/about">About</a>
            <a class="heading-1 text-lg" href="/contact">Contact</a>
            <a class="heading-1 text-lg" href="/shop">Shop</a>
            <a class="heading-1 text-lg whitespace-nowrap" href="/">My Account</a>
        </div>
    
        <div
            class="flex items-center gap-9"
            text="white-100 dark:black-600"
            grid="col-start-1 col-end-2 md:col-start-3 md:col-end-4 row-start-1 row-end-2"
        >
            <button class="hidden md:block focus:outline-none" on:click={ () => search = !search }>
                <SearchIcon />
            </button>
            <button class="focus:outline-none">
                <CartIcon />
            </button>
        </div>
    </nav>

    <Search bind:value={values.search} bind:show={search} />  
</div>

<!-- Mobile body doesn't need to be relative to the nav bar for now? -->
<MobileBody bind:value={ values.search } bind:show={mobile} />