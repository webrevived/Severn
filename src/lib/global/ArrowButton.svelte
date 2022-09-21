<script>
    import Arrow from "$lib/global/Arrow.svelte";
    export let flipped = false;
</script>

<button on:click class="text-black-600" p="x-6.5 y-3" border="<md:~ black-600 rounded-22px">
    <Arrow {flipped} />
</button>