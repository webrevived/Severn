<script lang="ts">
    import { onMount } from "svelte";
    import { spring, tweened } from "svelte/motion"

    export let options: string[]
    export let value: string;
    value = options[ Math.floor( options.length / 2 ) ] ?? ""

    let container: HTMLDivElement
    let indicator: HTMLDivElement

    const getRelativeCoordsToParent = (parentElm: HTMLElement, childElm: HTMLElement) => {    
        const parent = parentElm.getBoundingClientRect()
        const child = childElm.getBoundingClientRect()

        return { 
            top: child.top - parent.top,
            bottom: child.bottom - parent.bottom,
            left: child.left - parent.left,
            right: child.right - parent.right,
        }
    }

    const _left = spring( 0 )
    const onClick = (item: string, button: HTMLButtonElement) => () => {
        value = item
        const calcLeft = getRelativeCoordsToParent(container, button)
        _left.set(calcLeft.left + Math.floor(button.clientWidth / 2))
    }

    onMount( () => {
        const current = Array.from( container.children ).find( (elm) => elm.textContent === value )
        onClick( value, current as HTMLButtonElement )()
    } )
</script>

<div 
    class="relative flex justify-around pb-6"
    border="b-1px brown-1200"
    bind:this={container}
>
    {#each options as item}
        <button
            on:click={onClick(item, this)}
            class="heading-3 text-lg font-medium text-black-600"
        >{item}</button>
    {/each}

    <img 
        bind:this={indicator} 
        class="absolute bottom-0 bg-white-100 p-1.5"
        transform="~ -translate-x-1/2 translate-y-1/2" 
        src="/icons/CandlesTabIcon.svg" 
        alt="tab indicator"
        style="left: {$_left}px"
    />
</div>