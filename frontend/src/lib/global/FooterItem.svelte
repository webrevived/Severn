<script lang="ts">
    export let title: string;
</script>

<div 
    class="min-w-267px gap-2.5 flex-grow"
    flex="~ wrap col"
>
    <h2 
        class="mb-9px" 
        text="brown-1200 18px" 
        font="tiempos medium"
    >{title}</h2>
    
    <hr class="text-brown-1200">
    
    <slot />
</div>