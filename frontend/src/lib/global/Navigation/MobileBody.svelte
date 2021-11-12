<script lang="ts">
    import { fade } from 'svelte/transition'
    import { newsTags } from '$lib/stores'
    import NewsHeader from '$lib/global/NewsHeader.svelte';
    import Input from '$lib/global/Form/Input.svelte';
    import CloseIcon from './CloseIcon.svelte';
    import SearchIcon from './SearchIcon.svelte';
    import { navToggles, searchValue } from '$lib/stores'
    

    const onKeyDown = (e: KeyboardEvent) => {        
        if ($navToggles.mobile && e.key != "Escape") return
        $navToggles.mobile = false
    }
</script>

<svelte:window on:keydown={ onKeyDown } />

{#if $navToggles.mobile}
    <div
        transition:fade
        pos="fixed top-0 right-0 w-screen h-screen" 
        class="bg-white-100 z-3 overflow-scroll flex flex-col"
    >   
        <div class="flex-shrink-0">
            <NewsHeader tags={$newsTags} />
        </div>
        
        <div class="w-full h-full" p="x-7 y-6">
            <div class="w-full flex flex-wrap justify-between" m="b-10.5">
                <h1 class="heading-2 font-semibold">Seven</h1>
                <button on:click={ () => $navToggles.mobile = false }>
                    <CloseIcon />
                </button>
            </div>
    
            <div class="flex flex-col gap-7.5">
                <a class="text-black-600" href="/about">About</a>
                <a class="text-black-600" href="/contact">Contact</a>
                <a class="text-black-600" href="/shop">Shop</a>
                <a class="text-black-600" href="/account">My Account</a>
                <hr class="text-brown-1200">
                <a class="text-brown-1200" href="/contact">Contact Us</a>
                <a class="text-brown-1200" href="/return">Returns & Exchanges</a>
            </div>

            <div class="flex gap-5 mt-13">
                <Input bind:value={$searchValue} placeholder="E.g Thanks You Card" />
                <button class="bg-black-600 rounded-full text-white-100 p-2">
                    <SearchIcon --width = "17px" --height = "17px" />
                </button>  
            </div>
        </div>

    </div>
{/if}

<style>
    a {
        @apply heading-1 font-medium max-w-max;
    }
</style>