<script lang="ts">
    import { fly, fade } from 'svelte/transition'
    export let show = false

    const onKeyDown = (e: KeyboardEvent) => {        
        if (show && e.key != "Escape") return
        show = false
    }
</script>

<svelte:window on:keydown={ onKeyDown } />

{#if show}
    <div
        in:fly={{ y: -200 }}
        out:fade
        class="min-h-63.5 bg-white-100 z-4" 
        pos="absolute -top-6 -left-7 md:-left-25.5 -right-7 md:-right-25.5"
    >
        <slot />
    </div>

    <!-- overlay -->
    <div 
        transition:fade
        pos="fixed top-0 right-0 w-screen h-screen" 
        class="z-3 bg-black-600/30"
        on:click = {() => show = false}
    />
{/if}