<script lang="ts">
	import { slide } from 'svelte/transition';
	export let title: string;

	export let show = false;
</script>

<!-- Accordian Overlay -->
<div class="w-full pb-4" border="b-1px brown-1200">
	<!-- Accordian Head -->
	<div class="w-full" flex="~" justify="between">
		<h1 class="heading-2 text-black-600">{title}</h1>

		<button class="text-1 font-bold text-brown-1200 border-none" on:click={() => (show = !show)}>
			Learn More +
		</button>
	</div>

	<!-- Accordian Body -->
	{#if show}
		<div transition:slide>
			<slot />
		</div>
	{/if}
</div>
