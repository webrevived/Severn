<script lang="ts">
    import type { Writable } from 'svelte/store';
    import type { toggles } from '$lib/stores'
    import { fly, fade } from 'svelte/transition'
    export let show: Writable<toggles>
    export let key: string
    export let hoverMode = false

    const onKeyDown = (e: KeyboardEvent) => {        
        if (e.key != "Escape") return
        $show[key] = false
    }
</script>

<svelte:window on:keydown={ onKeyDown } />

{#if $show[key]}
    <div
        in:fly={{ y: -200 }}
        out:fade|local
        class="min-h-63.5 bg-white-100 z-4" 
        pos="absolute -top-6 -left-7 md:-left-25.5 -right-7 md:-right-25.5"
        on:mouseover
        on:focus
    >
        <slot />
    </div>

    <!-- overlay -->
    <div 
        transition:fade|local
        pos="fixed top-0 right-0 w-screen h-screen" 
        class="z-3 bg-black-600/30"
        on:click = {() => $show[key] = false}
        on:mouseenter={ hoverMode ? () => { $show[key] = false } : null }
    />
{/if}