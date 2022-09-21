<script lang="ts">
    import NewHeaderSep from "$lib/global/NewHeaderSep.svelte";
    export let tags: string[] = []
</script>


{#if tags.length > 1}
    <div 
        class="w-full min-h-11.5 gap-3 justify-center items-center"
        p="<sm:y-4"
        bg="black-600"
        text="center [#E1D5C9]" 
        flex = "~ wrap"
    >
        {#each tags as tag, i}
            <p class="text-2">{tag}</p>
            {#if i + 1 != tags.length}
                <NewHeaderSep />
            {/if}
        {/each}
    </div>
{/if}