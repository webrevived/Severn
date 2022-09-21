<script lang="ts">
    export let src: string;
    export let alt = "";
</script>

<div class="gap-5 justify-center items-center" flex="~ col">
    <img class="w-20 h-20" {src} {alt}>
    <p class="text-1 text-black-600"><slot/></p>
</div>