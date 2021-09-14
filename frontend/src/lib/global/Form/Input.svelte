<script lang="ts">
    export let id  = ""
    export let src = ""
    export let placeholder = "ewf"
    export let value: string;
</script>

{#if src.length > 1}
    <div
        class="gap-4 justify-center items-center"
        flex="~" 
        p="b-1"
        w="full" 
        border="b-1 black-600"
    >  
        <img class="ml-2 w-5 h-5" {src} alt="">
        <input 
            type="text"
            bind:value
            class="heading-3 font-$weight placeholder-[#888888]"
            w="full"
            outline="none"
            {id}
            {placeholder}
        />
    </div>
{:else}
    <input 
        type="text"
        bind:value
        class="heading-3 font-$weight placeholder-[#888888]"
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