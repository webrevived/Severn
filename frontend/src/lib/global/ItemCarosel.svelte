<script lang="ts">
    import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
    import { onMount } from 'svelte';
    import { CramItemCalc } from "$lib/utils/index"
    import Button from '$lib/global/Button.svelte'
    import ArrowButton from '$lib/global/ArrowButton.svelte'
    import ItemCard from '$lib/global/ItemCard.svelte'
    import type { ProductItem } from '$lib/api/products'

    export let category: string
    export let description: string
    export let button: string
    export let href: string = `/category/${button}`
    export let fw = "normal"

    export let items: ProductItem[]
    
    let SHOW = 1
    let shift = 0

    $: _items = Array.from( { length: SHOW > items.length ? items.length : SHOW }, (_, i) => items[i + shift] )

    let ItemContainer: HTMLDivElement
    const onResize = () => {
        const totalItems = CramItemCalc(ItemContainer)
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

<article class="w-full items-center md:items-start gap-x-25" flex="~ col md:row">
    <div class="flex flex-col w-full max-w-300px">
        <h1 class="heading-1 mb-5 font-$fw" style="--fw: {fw ?? 'bold'}">{category}</h1>
        <p class="text-1 text-brown-1200 leading-[150%] max-w-66 mb-18">{description}</p>
        
        <div class="md:grid mb-18">
            <Button {href}>{button}</Button>
        </div>

        <div class="hidden md:flex gap-13.5 self-center">
            <ArrowButton on:click={dec} flipped />
            <ArrowButton on:click={inc} />
        </div>
    </div>

    <div class="flex flex-wrap gap-5 w-full justify-center md:justify-start" bind:this={ ItemContainer } >
        {#each _items as item (item.id)}
            <div 
                in:receive|local={{key: item.title}} 
                out:send|local={{key: item.title}} 
                animate:flip = {{ duration: 1000 }}
            >
                <ItemCard {...item} href="/products/{item.id}" />
            </div>
        {/each}
    </div>

    <div class="flex md:hidden justify-center gap-13.5 w-full self-center mt-10">
        <ArrowButton on:click={dec} flipped />
        <ArrowButton on:click={inc} />
    </div>
</article>