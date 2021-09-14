<script>
    import Arrow from '$lib/global/Arrow.svelte'
    export let outline = false
    export let href = ""
</script>

{#if href.length > 1}
    <a
        {href}
        class="text-1 text-white-100 text-left font-bold gap-2"
        class:outline
        flex="~"
        w="full max-50"
        h="12.5"
        bg="black-600"
        border="rounded-30px"
        p="x-8 y-4"
    >
        <slot />
        <div class="transform translate-y-10/100">
            <Arrow />
        </div>
    </a>
{:else}
    <button
        on:click
        class="text-1 text-white-100 text-left font-bold gap-2"
        class:outline
        flex="~"
        w="min-50"
        h="12.5"
        bg="black-600"
        border="rounded-30px"
        p="x-8 y-4"
    >
        <slot />
        <div class="transform translate-y-10/100">
            <Arrow />
        </div>
    </button>
{/if}

<style>
    .outline { @apply bg-[transparent] border-2 border-black-600 text-black-600; }
</style>