<script>
    import Arrow from "$lib/global/Arrow.svelte";
    export let flipped = false;
</script>

<button on:click class="text-black-600">
    <Arrow {flipped} />
</button>