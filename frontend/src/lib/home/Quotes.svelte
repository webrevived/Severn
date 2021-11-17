<script lang="ts">
    import Rating from '$lib/home/Rating.svelte';
    import QuotesIndex from './QuotesIndex.svelte';
    import type { Review } from '$lib/api/severnReviews'
    
    const getIndex = (shift: number, arr: Review[]) => {
        if (shift >= 0) return shift % arr.length
        return (arr.length + (shift % arr.length)) % arr.length
	}

    export let quotes: Review[]
    let index = 0
    $: selected = quotes[getIndex(index, quotes)]

    const onKeyPress = ({ key }: KeyboardEvent) => {
        if (key === "ArrowLeft") index -= 1
        if (key === "ArrowRight") index += 1
    }

    const onMouseEnter = () => window.addEventListener("keydown", onKeyPress)
    const onMouseLeave = () => window.removeEventListener("keydown", onKeyPress)
</script>


<section 
    class="w-full min-h-175 mt-36.75 bg-white-300 items-center <md:gap-10"
    flex="~ col md:row"
    on:focus
    on:mouseenter={onMouseEnter}
    on:blur
    on:mouseleave={onMouseLeave}
>

    <img 
        class="w-full h-75 object-cover object-center md:w-1/2 md:min-h-200" 
        src="/images/Quotes_Thumbnail.png" 
        alt=""
    >

    <div 
        class="items-center justify-center text-center gap-7.5"
        w="1/2"
        flex="~ col"
    >
        <Rating rating = {selected.rating} />
    
        <p class="heading-2 max-w-120.25 <sm:text-lg">{selected.quote}</p>
        <h1 class="text-2 text-brown-1200 uppercase">- {selected.author} -</h1>
    
        <div class="flex gap-2.5">
            {#each quotes as _, i}
                <QuotesIndex 
                    active={getIndex(index, quotes) === i} 
                    on:click = { () => index = i }
                />
            {/each}
        </div>
    </div>

</section>