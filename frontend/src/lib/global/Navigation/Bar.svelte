<script>
    import Dropdown from "$lib/global/Navigation/Dropdown.svelte";
    import SearchIcon from "$lib/global/Navigation/SearchIcon.svelte";
    import CartIcon from "$lib/global/Navigation/CartIcon.svelte";
    import Search from "$lib/global/Navigation/Search.svelte";

    const values = {
        search: ''
    }

    let search = false
    let shop = false
    let cart = false
</script>

<div class="relative">
    <nav
        grid="~ rows-1 cols-[max-content_1fr_max-content] gap-26"
        class="relative justify-center"
    >
        <!-- Saven, Severn, Seven???? -->
        <h1 class="heading-1 text-2xl tracking-[.03em] text-white-100">Seven ®</h1>
    
        <div
            class="hidden md:flex items-center gap-15" 
            text="white-100"
        >
            <a class="heading-1 text-lg" href="/">About</a>
            <a class="heading-1 text-lg" href="/">Contact</a>
            <a class="heading-1 text-lg" href="/">Shop</a>
            <a class="heading-1 text-lg whitespace-nowrap" href="/">My Account</a>
        </div>
    
        <div
            class="flex text-white-100 items-center gap-9"
        >
            <button on:click={ () => search = !search } class="focus:outline-none">
                <SearchIcon />
            </button>
            <button class="focus:outline-none">
                <CartIcon />
            </button>
        </div>
    </nav>

    <Search bind:value={values.search} bind:show={search} />
</div>

<style>

</style>