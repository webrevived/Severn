<script lang="ts">
    import Button from "$lib/global/Button.svelte"
    export let title: string
    export let button: string = "Mail To"
</script>

<div class="pt-7.5 flex flex-col gap-5" border="t-1 black-600">
    <h1 class="heading-2 font-medium text-black-600">{title}</h1>
    
    <p class="text-1 text-brown-1200 mb-2.5">
        <slot />
    </p>
    
    <div>
        <Button>{button}</Button>
    </div>
</div>