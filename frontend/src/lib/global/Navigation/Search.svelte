<script lang="ts">
    import Dropdown from "$lib/global/Navigation/Dropdown.svelte";
    import Input from '$lib/global/Form/Input.svelte'
    import Button from '$lib/global/Button.svelte'

    export let value: string
    export let show = false
</script>

<Dropdown bind:show={show}>
    <div class="w-full h-full flex flex-col items-center py-14 gap-10">
        <h1 class="heading-2 font-medium text-black-600 text-center">What are you searching for?</h1>

        <div grid="~ rows-2 md:rows-1 cols-1 md:cols-[75%_1fr]" class="w-3/4 md:w-3/5 gap-6">
            <Input
                src = "/icons/Search.svg"
                bind:value={value} 
                placeholder="E.g Thanks You Card" 
            />
            
            <div class="grid md:block">
                <Button>Search</Button>
            </div>
        </div>
    </div>
</Dropdown>