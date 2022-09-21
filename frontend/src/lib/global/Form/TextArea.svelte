<script lang="ts">
    export let placeholder = ""
    export let id = ""
    export let value: string;
    export let rows = 5
</script>

<textarea
    bind:value
    class="heading-3 w-full placeholder-[#888888] bg-[inherit]"
    p = "b-2"
    border = "b-1 black-600"
    outline="none"
    {id}
    {rows}
    {placeholder}
></textarea>