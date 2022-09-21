<script lang="ts">
	import Input from '$lib/global/Form/Input.svelte';
	import type { Writable } from 'svelte/store';

	export let errors: Writable<any>;
	export let title: string = 'Contact Information';
</script>

<div class="flex flex-col gap-5">
	<h3 class="heading-3 font-semibold">{title}</h3>

	<div class="flex flex-col gap-8">
		<div class="group grid grid-cols-2 gap-7">
			<Input name="first_name" value="" placeholder="First Name" error={$errors.first_name} />
			<Input name="last_name" value="" placeholder="Last Name" error={$errors.last_name} />
		</div>
		<Input name="email" value="" placeholder="Email" error={$errors.email} />
	</div>
</div>

<style lang="scss">
</style>
