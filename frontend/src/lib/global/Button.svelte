<script lang="ts">
	import Arrow from '$lib/global/Arrow.svelte';

	export let arrow: boolean = true;
	export let outline = false;
	export let href = '';
</script>

{#if href.length > 1}
	<a
		{href}
		class="text-1 font-bold gap-2 items-center"
		class:outline
		flex="~"
		w="min-50"
		h="min-12.5"
		text="white-100 hover:black-600 left"
		bg="black-600 hover:[transparent]"
		border="rounded-30px 2 black-600"
		p="x-8 y-4"
		transition="~ colors duration-200"
	>
		<slot />

		{#if arrow}
			<div class="transform translate-y-10/100 h-min">
				<Arrow />
			</div>
		{/if}
	</a>
{:else}
	<button
		on:click
		class="text-1 font-bold gap-2 items-center"
		class:outline
		flex="~"
		w="min-50"
		h="min-12.5"
		text="white-100 hover:black-600 left"
		bg="black-600 hover:[transparent]"
		border="rounded-30px 2 black-600"
		p="x-8 y-4"
		transition="~ colors duration-200"
	>
		<slot />
		{#if arrow}
			<div class="transform translate-y-10/100 h-min">
				<Arrow />
			</div>
		{/if}
	</button>
{/if}

<style>
	.outline {
		@apply bg-[transparent] hover:bg-black-600 text-black-600 hover:text-white-100;
	}
</style>
