<script lang="ts">
	import Input from '$lib/global/Form/Input.svelte';
	import type { Address } from '$lib/interfaces/Address';
	import { createEventDispatcher } from 'svelte';
	export let data: Address;

	/* Switch the view if they're editing address */
	let editMode = false;

	/* Temp data storage to override address only on save */
	let temp = { ...data };

    const disptach = createEventDispatcher();

	const saveData = () => {
		data = temp;
		editMode = false;
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		const isEscape = event.key === 'Escape';
		const isEnter = event.key === 'Enter';

		if (!editMode || (!isEscape && !isEnter)) return;
		editMode = false;

		isEnter ? data = temp : temp = {...data}
	};

</script>

<svelte:body on:keydown={handleKeyDown} />

<div class="border-1 rounded-lg p-5 flex-grow text-grey-600 flex justify-between text-base">
	{#if editMode}
		<div class="flex flex-col gap-4">
			<Input --size="12px" bind:value={temp.company} />
			<Input --size="12px" bind:value={temp.street} />
			<div class="flex gap-4">
				<Input --size="12px" bind:value={temp.city} />
				<Input --size="12px" bind:value={temp.zip} />
				<Input --size="12px" bind:value={temp.state} />
			</div>

			<span on:click={saveData} class="text-brown-600 text-lg mt-auto">Save</span>
		</div>
	{:else}
		<div class="flex flex-col">
			{#if data.company}
				<span>{data.company}</span>
			{/if}
			<span>{data.street}</span>
			<span>{data.city} {data.state}, {data.zip}</span>
		</div>

		<div class="flex flex-col text-right">
			{#if data.primary}
				<span>
					<img class="inline mr-1" src="/icons/Checkmark.svg" alt="Checkmark Icon" /> Primary</span
				>
			{:else}
				<span class="text-brown-600" on:click={() => disptach('markPrimary', data.id)}>Make Primary</span>
			{/if}
			<span class="text-brown-600" on:click={() => (editMode = true)}>Edit</span>
		</div>
	{/if}
</div>
