<script lang="ts">
	export let id = '';
	export let src = '';
	export let placeholder = '';
	export let value: string;
	export let name: string = undefined;
	export let error: string = undefined;
</script>

{#if src.length > 1}
	<div class="gap-x-4 justify-center items-end" flex="~" p="b-1" w="full" border="b-1 black-600">
		<div class="flex w-full items-center gap-x-4">
			<img class="ml-2 w-5 h-5" {src} alt="" />
			<input
				type="text"
				{name}
				bind:value
				class="heading-3 text-sizing-$size font-$weight placeholder-[#888888] bg-[inherit] w-full outline-none"
				{id}
				{placeholder}
			/>
		</div>
	</div>
{:else}
	<div>
		<input
			type="text"
			{name}
			bind:value
			class="heading-3 text-sizing-$size font-$weight placeholder-[#888888] bg-[inherit] w-full outline-none border-b border-black-600"
			{placeholder}
		/>
		{#if error}
			<span class="text-white-600">{error}</span>
		{/if}
	</div>
{/if}

<style>
	.font-\$weight {
		font-weight: var(--font-weight, 300);
	}

	.text-sizing-\$size {
		font-size: var(--size, 16px);
	}
</style>
