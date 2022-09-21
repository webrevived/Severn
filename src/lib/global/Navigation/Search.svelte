<script lang="ts">
	import Dropdown from '$lib/global/Navigation/Dropdown.svelte';
	import Input from '$lib/global/Form/Input.svelte';
	import Button from '$lib/global/Button.svelte';
	import { goto } from '$app/navigation';
	import { searchValue, navToggles } from '$lib/stores';

	const onSubmit = () => {
		if ($searchValue?.length <= 0) return;
		$navToggles.search = false;
		goto(`/search/${$searchValue}`);
	};
</script>

<Dropdown show={navToggles} key="search">
	<div class="w-full h-full flex flex-col items-center py-14 gap-10">
		<h1 class="heading-2 font-medium text-black-600 text-center">What are you searching for?</h1>

		<form
			grid="~ rows-2 md:rows-1 cols-1 md:cols-[75%_1fr]"
			class="w-3/4 md:w-3/5 gap-6"
			on:submit|preventDefault={onSubmit}
		>
			<Input src="/icons/Search.svg" bind:value={$searchValue} placeholder="E.g Thanks You Card" />

			<div class="grid md:block">
				<Button>Search</Button>
			</div>
		</form>
	</div>
</Dropdown>
