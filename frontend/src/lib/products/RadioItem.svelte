<script lang="ts">
    type A = $$Generic
    export let value: A
    
    let UID = Math.floor(Math.random()*16777215).toString(16);
    export let key: string
    export let checked: boolean = false
</script>

<input class="appearance-none" type="radio" id="{UID}-form" name={key} {value} {checked}>
<label class="text-1 -lg:text-base text-black-600 px-7.5 py-2.5 font-bold" border="r-1px black-600" for="{UID}-form">
    <slot/>
</label>

<style>
    input:checked + label {
        @apply bg-black-600 text-white-300;
    }
</style>