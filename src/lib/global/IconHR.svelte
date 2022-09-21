<script lang="ts">
    export let src: string;
</script>

<div class="relative">
    <img 
        class="w-4.5 h-4.5 bg-white-100 box-content p-1.5 select-none"
        pos="absolute top-1/2 left-1/2"
        transform="~ -translate-x-1/2 -translate-y-1/2" 
        {src} 
        alt=""
        draggable="false"
    />
    <hr class="text-brown-1200">
</div>