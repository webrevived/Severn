<script lang="ts">
	export let title: string;
	export let total: string | number;
    export let bold: boolean = false;
</script>

<div class="flex justify-between w-full" class:bold>
	<h4 class="text-black-600 text-lg font-tiempos">{title}</h4>
	{#if typeof total === 'string'}
		<span class="text-black-600">{total}</span>
	{:else}
		<span class="text-black-600">$ {total}</span>
	{/if}
</div>

<style lang="scss">
    .bold {
        font-weight: 700;
        
        span {
            font-weight: 600;
        }
    }
</style>
