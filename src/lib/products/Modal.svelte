<script lang="ts">
	import CloseIcon from '$lib/global/Navigation/CloseIcon.svelte';
	export let open = false;

	const onKeyDown = ({ key }: KeyboardEvent) => {
		if (open && key === 'Escape') open = false;
	};
</script>

<svelte:window on:keydown={onKeyDown} />

{#if open}
	<div class="fixed top-0 left-0 w-screen h-screen z-10">
		<div
			on:click={() => (open = false)}
			class="fixed top-0 left-0 w-screen h-screen grid place-content-center bg-[#00000028] z-4"
		/>
		<div
			class="fixed top-1/2 left-1/2 w-full h-full md:max-w-900px md:max-h-700px bg-white-300 z-5"
			transform="~ -translate-x-1/2 -translate-y-1/2"
		>
			<div class="relative w-full h-full">
				<button on:click={() => (open = false)} class="absolute top-15 right-15 z-3">
					<CloseIcon />
				</button>
			</div>
			<div class="absolute top-0 left-0 w-full h-full">
				<slot />
			</div>
		</div>
	</div>
{/if}
