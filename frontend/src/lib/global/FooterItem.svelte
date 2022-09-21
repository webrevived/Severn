<script lang="ts">
    export let title: string;
</script>

<div 
    class="min-w-267px gap-2.5 flex-grow"
    flex="~ wrap col"
>
    <h2 
        class="mb-9px" 
        text="white-100 18px" 
        font="tiempos medium"
    >{title}</h2>
    
    <hr class="text-brown-1200 opacity-40">
    
    <slot />
</div>