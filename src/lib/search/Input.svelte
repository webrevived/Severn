<script lang="ts">
    import { goto } from '$app/navigation';
    import Input from '$lib/global/Form/Input.svelte'
    import Button from '$lib/global/Button.svelte'
    
    export let term: string;

    const onSubmit = () => {
        if (term.length <= 0) return
        goto(`/search/${term}`)
    }
</script>

<section class="x-container pt-42.5 flex flex-col items-center gap-14">
    <h1 class="heading-1 text-black-600 font-medium text-50px text-center">Your Search Results</h1>

    <form 
        grid="~ rows-2 md:rows-1 cols-1 md:cols-[75%_1fr]" 
        class="w-3/4 md:w-3/5 gap-6"
        on:submit|preventDefault={ onSubmit }
    >
        <Input
            src = "/icons/Search.svg"
            bind:value={term} 
            placeholder="E.g Thanks You Card" 
        />
        
        <div class="grid md:block">
            <Button>Search</Button>
        </div>
    </form>
</section>