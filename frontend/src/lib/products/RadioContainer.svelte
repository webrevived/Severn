<script lang="ts">
    import { onMount } from "svelte";
    
    const key = Math.floor(Math.random()*16777215).toString(16);
    let fieldSet: HTMLFieldSetElement

    export let defaultChoice = null
    export let value: string = defaultChoice 
    const onChange = () => {
        const radio: HTMLInputElement = fieldSet.querySelector(`input[name="${key}"]:checked`)
        value = radio.value
    }

    onMount( onChange )
</script>

<fieldset 
    class="w-max flex overflow-hidden" 
    border="1px rounded-30px black-600"
    bind:this={fieldSet}
    on:change={onChange}
>
    <slot {key} />
</fieldset>

<style>
    fieldset > :global(label:last-of-type) {
        @apply border-0px;
    }
</style>