<script lang="ts">
	import { fade } from 'svelte/transition';
	import ClickOutside from 'svelte-click-outside';

	const init = { None: null };
	export let list: object = init;
	$: list = { ...init, ...list };
	let open = false;

	let selected = 'None';
	export let value = list[selected];
	$: value = list[selected];

	const onClickOutside = () => {
		if (open) open = false;
	};
</script>

<div class="w-max">
	<ClickOutside on:clickoutside={onClickOutside}>
		<div class="relative z-3">
			<!-- form -->
			<div
				class="text-1 text-black-600 font-bold min-w-276px w-min cursor-pointer"
				p="y-2 x-4.25"
				flex="~"
				justify="between"
				border="~ black-600 rounded-full"
				on:click={() => (open = !open)}
			>
				<p>{selected}</p>
				<img
					class="transition-transform transform"
					class:-rotate-180={open}
					src="/icons/caret.svg"
					alt=""
				/>
			</div>

			<!-- list -->
			{#if open}
				<div
					class="absolute top-120/100 bg-white-300 min-w-276px min-h-30 gap-2"
					flex="~ col"
					p="y-2 x-2.25"
					border="rounded-[8px]"
					transition:fade={{ duration: 250 }}
				>
					{#each Object.keys(list) as key}
						<button
							class="hover:bg-[#d6d0c9] px-2"
							text="left brown-1200"
							border="rounded-[4px]"
							on:click={() => {
								selected = key;
								open = false;
							}}>{key}</button
						>
					{/each}
				</div>
			{/if}
		</div>
	</ClickOutside>
</div>
