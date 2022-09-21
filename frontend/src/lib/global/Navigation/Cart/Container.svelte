<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { toggles } from '$lib/stores';
	import { fly, fade } from 'svelte/transition';

	export let show: Writable<toggles>;
	export let key: string;
	export let hoverMode = false;

	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key != 'Escape') return;
		$show[key] = false;
	};
</script>

<svelte:window on:keydown={onKeyDown} />

{#if $show[key]}
	<div
		in:fly|local={{ x: 50, opacity: 0, duration: 500 }}
		out:fly|local={{ x: 50, duration: 500 }}
		class="md:(w-full max-w-147) bg-white-100 z-4 fixed top-0 right-0 h-full slideout z-20 sm:(w-full max-w-[550px])"
	>
		<slot />
	</div>

	<!-- overlay -->
	<div
		transition:fade|local
		pos="fixed top-0 left-0 right-0 w-screen h-screen"
		class="z-3 bg-black-600/30"
		on:click={() => ($show[key] = false)}
		on:mouseenter={hoverMode
			? () => {
					$show[key] = false;
			  }
			: null}
	/>
{/if}

<style>
	@media only screen and (max-width: 425px) {
		.slideout {
			max-width: none;
			width: 100%;
		}
	}
</style>
