<script lang="ts">
    import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
    import { onMount } from 'svelte';
    import Button from '$lib/global/Button.svelte'
    import ArrowButton from '$lib/global/ArrowButton.svelte'
    import ItemCard from '$lib/global/ItemCard.svelte'
    import type { Items } from '$lib/interfaces/Items'

    export let category: string
    export let description: string
    export let button: string

    export let items: Items[]
    
    let SHOW = 1
    let shift = 0

    $: _items = Array.from( { length: SHOW > items.length ? items.length : SHOW }, (_, i) => items[i + shift] )

    let ItemContainer: HTMLDivElement
    const onResize = () => {
        const { width: containerWidth, rowGap: gap } = window.getComputedStyle(ItemContainer)
        const itemWidth = 270 + parseInt(gap)
        const totalItems = Math.floor( parseInt(containerWidth) / itemWidth )
        SHOW = totalItems < 1 ? 1 : totalItems
    }
    
    onMount( onResize )

    const inc = () => shift += (shift + SHOW) < items.length ? 1 : 0
    const dec = () => shift -= shift >= 1 ? 1 : 0

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
                delay: params.delay,
				duration: 150,
				easing: cubicInOut,
				css: (t, u) => `
					transform: ${transform} translateY(${u * 50}%);
					opacity: ${t}
				`
			};
		}
	});
</script>

<svelte:window on:resize={ onResize } />

<article class="w-full flex flex-col md:flex-row items-center md:items-start gap-x-25" >
    <div class="flex flex-col min-w-max">
        <h1 class="heading-1 mb-5">{category}</h1>
        <p class="text-1 text-brown-1200 leading-[150%] max-w-66 mb-18">{description}</p>
        
        <div class="md:grid mb-18">
            <Button>{button}</Button>
        </div>

        <div class="hidden md:flex gap-13.5 self-center">
            <ArrowButton on:click={dec} flipped />
            <ArrowButton on:click={inc} />
        </div>
    </div>

    <div class="flex flex-wrap gap-5 w-full justify-center md:justify-start" bind:this={ ItemContainer } >
        {#each _items as item (item.title)}
            <div 
                in:receive|local={{key: item.title}} 
                out:send|local={{key: item.title}} 
                animate:flip = {{ duration: 1000 }}
            >
                <ItemCard {...item} />
            </div>
        {/each}
    </div>

    <div class="flex md:hidden justify-center gap-13.5 w-full self-center mt-10">
        <ArrowButton on:click={dec} flipped />
        <ArrowButton on:click={inc} />
    </div>
</article>