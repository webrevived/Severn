<script lang="ts">
	import Arrow from '$lib/global/Arrow.svelte';

	export let isLoading: boolean = false;
	export let loadingMessage: string = 'Loading...';
	export let outline = false;
	export let href = undefined;
	export let width: string = 'auto';
	export let minWidth: string = '50px';
</script>

{#if href}
	<a
		class:isLoading
		{href}
		style="min-width: {minWidth}"
		class="text-1 font-bold gap-5 items-center flex w-auto h-min-12.5"
		class:outline
		text="white-100 hover:black-600 left"
		bg="black-600 hover:[transparent]"
		border="rounded-30px 2 black-600"
		transition="~ colors duration-200"
	>
		{#if isLoading}
			{loadingMessage}
		{:else}
			<slot />
		{/if}

		{#if !isLoading}
			<div class="transform translate-y-10/100 h-min">
				<Arrow />
			</div>
		{/if}
	</a>
{:else}
	<button
		disabled={isLoading}
		on:click
		class="text-1 font-bold gap-2 items-center"
		style="min-width: {minWidth}"
		class:outline
		flex="~"
		w="min-50"
		h="min-12.5"
		text="white-100 hover:black-600 left"
		bg="black-600 hover:[transparent]"
		border="rounded-30px 2 black-600"
		transition="~ colors duration-200"
		style:width
	>
		{#if isLoading}
			{loadingMessage}
		{:else}
			<slot />
		{/if}

		{#if !isLoading}
			<div class="transform translate-y-10/100 h-min">
				<Arrow />
			</div>
		{/if}
	</button>
{/if}

<style>
	button,
	a {
		outline: none;
		-webkit-appearance: none;
		appearance: none;
		padding: 0.5rem 2rem;
	}
	.outline {
		@apply bg-[transparent] hover:bg-black-600 text-black-600 hover:text-white-100;
	}

	.isLoading {
		pointer-events: none;
	}

	@media only screen and (max-width: 425px) {
		button,
		a {
			@apply px-5 py-2;
		}
	}
</style>
