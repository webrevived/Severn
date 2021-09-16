<script lang="ts">
    export let id  = ""
    export let src = ""
    export let placeholder = "ewf"
    export let value: string;
</script>

{#if src.length > 1}
    <div
        class="gap-x-4 justify-center items-end"
        flex="~" 
        p="b-1"
        w="full" 
        border="b-1 black-600"
    >  
        <div class="flex w-full items-center gap-x-4">
            <img class="ml-2 w-5 h-5" {src} alt="">
            <input 
                type="text"
                bind:value
                class="heading-3 font-$weight placeholder-[#888888] bg-[inherit]"
                w="full"
                outline="none"
                {id}
                {placeholder}
            />
        </div>
    </div>
{:else}
    <input 
        type="text"
        bind:value
        class="heading-3 font-$weight placeholder-[#888888] bg-[inherit]"
        w="full"
        outline="none"
        border="b-1 black-600"
        {placeholder}
    />
{/if}

<style>
    .font-\$weight {
        font-weight: var(--font-weight, 300);
    }
</style>